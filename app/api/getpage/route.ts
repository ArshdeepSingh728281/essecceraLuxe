/* eslint-disable @typescript-eslint/no-unused-vars */
import dbConnect from "../../utils/dbConn";
import Page from "../../models/Pages";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
// import uniqid from 'uniqid';
import { v2 as cloudinary } from 'cloudinary';
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();





  
export async function POST(req,res) {
  try {
    await dbConnect();


      const body = await req.json();

      const foundpage = await Page.findOne({pagename:body.pagename})

      if(!foundpage){
        return NextResponse.json(
                { msg: "Page Not Found", code: 404, success: false },
                { status: 200 }
        );
      }
    
        return NextResponse.json(
                { msg: "", code: 200, success: true ,page:foundpage},
                { status: 200 }
        );

  } catch (e) {
    console.error("Email send failed:", e);
    return NextResponse.json(
      { message: "Server error, please try again!" },
      { status: 500 }
    );
  }
}
