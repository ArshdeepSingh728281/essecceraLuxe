/* eslint-disable @typescript-eslint/no-unused-vars */
import dbConnect from "../../utils/dbConn";
import Form from "../../models/Form";
import RateLimit from "../../models/RateLimit";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
// import uniqid from 'uniqid';
import { headers } from "next/headers";
import { v2 as cloudinary } from 'cloudinary';
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();



cloudinary.config({
  cloud_name: 'dvbxvazrx',
  api_key: process.env.api_key,
  api_secret: process.env.api_secret,
});


async function uploadToCloudinary(base64Image: string) {
  try {
    const response = await cloudinary.uploader.upload(base64Image, {
      folder: 'essecceraLuxe',
      resource_type: 'auto', 
      access_mode: 'public', 
    });
    return response.secure_url;
  } catch (error) {
    console.error('Error uploading to Cloudinary:', error);
    throw error;
  }
}


const extractPublicId = (url: string) => {
    const regex = /\/([^/]+\/[^/]+)(?=\.[a-zA-Z]{3,4}$)/; 
    const match = url.match(regex);
    console.log('Extracted Public ID:', match ? match[1] : null); 
    return match ? match[1] : null; 
  };



  const deleteImageFromCloudinary = (url:string) => {
    return new Promise((resolve, reject) => {
      const publicId = extractPublicId(url);
      console.log(publicId);
  
      if (!publicId) {
        console.log('Invalid URL or Public ID not found.');
        return reject('Invalid URL or Public ID not found.');
      }
  
      cloudinary.uploader.destroy(publicId, (error, result) => {
        if (error) {
          console.error('Error deleting image from Cloudinary:', error);
          return reject(error);  
        }
        console.log('Delete result:', result); 
        resolve(result);  
      });
    });
  };








const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  try {
    await dbConnect();

    const body = await req.json();
    const { fullname, email, department, file, filename } = body;

    // === Extract IP for Vercel ===
        const allHeaders = await headers(); // don't call it inside the expression

        const ip =
        allHeaders.get("x-forwarded-for")?.split(",")[0]?.trim() ||
        allHeaders.get("x-real-ip") ||
        "unknown";



    // === Validate ===
    if (!fullname || fullname.trim().length < 2)
      return NextResponse.json({ message: "Name too short" }, { status: 400 });

    if (!email || !emailRegex.test(email))
      return NextResponse.json({ message: "Invalid email" }, { status: 400 });

    if (!department || !file || !filename)
      return NextResponse.json({ message: "Missing fields" }, { status: 400 });

    const base64SizeKB = (file.length * 3) / 4 / 1024;
    if (base64SizeKB > 500) {
      return NextResponse.json({ message: "File exceeds 500KB limit" }, { status: 400 });
    }

    // === Rate Limiting by IP (5 per 15 min) ===
    const now = new Date();
    const windowStart = new Date(now.getTime() - 15 * 60 * 1000);
    const recentAttempts = await RateLimit.find({
      ipAddress: ip,
      timestamp: { $gte: windowStart },
    });

    if (recentAttempts.length >= 5) {
      return NextResponse.json(
        { message: "Too many submissions. Try again after 15 minutes." },
        { status: 429 }
      );
    }

    await RateLimit.create({ ipAddress: ip, timestamp: now });

    // === Upload to Cloudinary ===
    const uploadRes = await uploadToCloudinary(file);

    // === Save to MongoDB ===

    const newForm = new Form({
      fullname,
      email,
      department,
      file: uploadRes,
      filename,
    });

    await newForm.save();

    //sendemail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    
    const info = await transporter.sendMail({
      from: `"" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: "Hire Form Update",
      html: `<p><b>${fullname}</b> has applied for a position in <b>${department}</b> with email ${email}.<br/>
      Resume: <a href="${uploadRes}" target="_blank">${filename}</a></p>`,
    });
    
        // console.log("Email sent:", info.messageId);



        
    return NextResponse.json({ message: "Success", data: newForm }, { status: 200 });
  } catch (error) {
    console.error("Submission error:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
