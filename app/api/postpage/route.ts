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


console.log("Server started ");

let otp = ""; 

cloudinary.config({
  cloud_name: 'dvbxvazrx',
  api_key: process.env.api_key,
  api_secret: process.env.api_secret,
});


async function uploadToCloudinary(base64Image) {
  try {
    // const response = await cloudinary.uploader.upload(`data:image/png;base64,${base64Image}`, {
    const response = await cloudinary.uploader.upload(`${base64Image}`, {
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


const extractPublicId = (url) => {
    const regex = /\/([^/]+\/[^/]+)(?=\.[a-zA-Z]{3,4}$)/; 
    const match = url.match(regex);
    console.log('Extracted Public ID:', match ? match[1] : null); 
    return match ? match[1] : null; 
  };



  const deleteImageFromCloudinary = (url) => {
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





  
export async function POST(req,res) {
  try {
    await dbConnect();


      const body = await req.json();

      const pagename = body.pagename;
      const savedata = await body.savedata;

      const foundpage = await Page.findOne({pagename});

      if(body.otp!=otp){
            return NextResponse.json({msg:"Wrong OTP",code: 200,data:{success:"false"}},{ status: 200 })
      }

      if(foundpage){

          if(body.pagename=="home"){



            for(let i=0;i<foundpage.data.frontimages.length;i++){
              if(foundpage.data.frontimages[i][0] == "h"){
              let imgexists = false;
              for(let j=0;j<savedata.frontimages.length;j++){
                if(savedata.frontimages[j][0]=="h" && foundpage.data.frontimages[i]==savedata.frontimages[j]){
                  imgexists = true;
                  break;
                }
              }
              if (!imgexists) await deleteImageFromCloudinary(foundpage.data.frontimages[i]);
              }
            }


            for(let i=0;i<foundpage.data.aboutusdata.length;i++){
              if(foundpage.data.aboutusdata[i].img[0] == "h"){
              let imgexists = false;
              for(let j=0;j<savedata.aboutusdata.length;j++){
                if(savedata.aboutusdata[j].img[0]=="h" && foundpage.data.aboutusdata[i].img==savedata.aboutusdata[j].img){
                  imgexists = true;
                  break;
                }
              }
              if (!imgexists) await deleteImageFromCloudinary(foundpage.data.aboutusdata[i].img);
              }
            }


            for(let i=0;i<foundpage.data.ourbrands.length;i++){
              if(foundpage.data.ourbrands[i].img[0] == "h"){
              let imgexists = false;
              for(let j=0;j<savedata.ourbrands.length;j++){
                if(savedata.ourbrands[j].img[0]=="h" && foundpage.data.ourbrands[i].img==savedata.ourbrands[j].img){
                  imgexists = true;
                  break;
                }
              }
              if (!imgexists) await deleteImageFromCloudinary(foundpage.data.ourbrands[i].img);
              }
            }


            for(let i=0;i<foundpage.data.brandimages.length;i++){
              if(foundpage.data.brandimages[i].img[0] == "h"){
              let imgexists = false;
              for(let j=0;j<savedata.brandimages.length;j++){
                if(savedata.brandimages[j].img[0]=="h" && foundpage.data.brandimages[i].img==savedata.brandimages[j].img){
                  imgexists = true;
                  break;
                }
              }
              if (!imgexists) await deleteImageFromCloudinary(foundpage.data.brandimages[i].img);
              }
            }





            for(let i=0;i<savedata.frontimages.length;i++){
          if(savedata.frontimages[i][0] == "h" || savedata.frontimages[i][0] == "i"){
          }else{
            savedata.frontimages[i] = await uploadToCloudinary(savedata.frontimages[i])
          }
        }


        for(let i=0;i<savedata.aboutusdata.length;i++){
          if(savedata.aboutusdata[i].img[0] == "h" || savedata.aboutusdata[i].img[0] == "i" || savedata.aboutusdata[i].img == ""){
          }else{
            savedata.aboutusdata[i].img = await uploadToCloudinary(savedata.aboutusdata[i].img)
          }
        }

        for(let i=0;i<savedata.ourbrands.length;i++){
          if(savedata.ourbrands[i].img[0] == "h" || savedata.ourbrands[i].img[0] == "i" || savedata.ourbrands[i].img == ""){
          }else{
            savedata.ourbrands[i].img = await uploadToCloudinary(savedata.ourbrands[i].img)
          }
        }


        for(let i=0;i<savedata.brandimages.length;i++){
          if(savedata.brandimages[i].img[0] == "h" || savedata.brandimages[i].img[0] == "i" || savedata.brandimages[i].img == ""){
          }else{
            savedata.brandimages[i].img = await uploadToCloudinary(savedata.brandimages[i].img)
          }
        }


        await Page.findOneAndUpdate(
          { pagename },
          { data: savedata }, 
          { new: true } 
        );
          }


          if(body.pagename=="newsandevents"){
                  for(let i=0;i<foundpage.data.newsdata.length;i++){
                    if(foundpage.data.newsdata[i].img[0] == "h"){
                    let imgexists = false;
                    for(let j=0;j<savedata.newsdata.length;j++){
                      if(savedata.newsdata[j].img[0]=="h" && foundpage.data.newsdata[i].img==savedata.newsdata[j].img){
                        imgexists = true;
                        break;
                      }
                    }
                    if (!imgexists) await deleteImageFromCloudinary(foundpage.data.newsdata[i].img);
                    }
                  }


              for(let i=0;i<savedata.newsdata.length;i++){
                if(savedata.newsdata[i].img[0] == "h" || savedata.newsdata[i].img[0] == "i" || savedata.newsdata[i].img == ""){
                }else{
                  savedata.newsdata[i].img = await uploadToCloudinary(savedata.newsdata[i].img)
                }
              }
                await Page.findOneAndUpdate({ pagename },{ data: savedata }, { new: true } );
        }


          if(body.pagename=="aboutus"){
                  for(let i=0;i<foundpage.data.team.length;i++){
                    if(foundpage.data.team[i].img[0] == "h"){
                    let imgexists = false;
                    for(let j=0;j<savedata.team.length;j++){
                      if(savedata.team[j].img[0]=="h" && foundpage.data.team[i].img==savedata.team[j].img){
                        imgexists = true;
                        break;
                      }
                    }
                    if (!imgexists) await deleteImageFromCloudinary(foundpage.data.team[i].img);
                    }
                  }


              for(let i=0;i<savedata.team.length;i++){
                if(savedata.team[i].img[0] == "h" || savedata.team[i].img[0] == "i" || savedata.team[i].img == ""){
                }else{
                  savedata.team[i].img = await uploadToCloudinary(savedata.team[i].img)
                }
              }
                await Page.findOneAndUpdate({ pagename },{ data: savedata }, { new: true } );
        }

          if(body.pagename=="investor"){

            // and if you are wondering it is written by me not ai 

            for (let i = 0; i < foundpage.data.reports.length; i++) {
              for (let j = 0; j < foundpage.data.reports[i].files.length; j++) {
                const oldFile = foundpage.data.reports[i].files[j].file;

                if (oldFile[0] === "h") {
                  let foundpdf = false;

                  for (let k = 0; k < savedata.reports.length; k++) {
                    for (let l = 0; l < savedata.reports[k].files.length; l++) {
                      const newFile = savedata.reports[k].files[l].file;

                      if (newFile[0] === "h" && newFile === oldFile) {
                        foundpdf = true;
                        break;
                      }
                    }
                    if (foundpdf) break; 
                  }

                  if (!foundpdf) {
                    await deleteImageFromCloudinary(oldFile);
                  }
                }
              }
            }




          for(let i=0;i<savedata.reports.length;i++){
            for(let j=0;j<savedata.reports[i].files.length;j++){
              if(savedata.reports[i].files[j].file[0]=="d"){
                savedata.reports[i].files[j].file = await uploadToCloudinary(savedata.reports[i].files[j].file)
              }
            }
          }

                await Page.findOneAndUpdate({ pagename },{ data: savedata }, { new: true } );
        }

        if(body.pagename=="career"){
          await Page.findOneAndUpdate({ pagename },{ data: savedata }, { new: true } );
        }


        
      }else{

      if(body.pagename=="home"){


        for(let i=0;i<savedata.frontimages.length;i++){
          if(savedata.frontimages[i][0] == "h" || savedata.frontimages[i][0] == "i"){
          }else{
            savedata.frontimages[i] = await uploadToCloudinary(savedata.frontimages[i])
          }
        }


        for(let i=0;i<savedata.aboutusdata.length;i++){
          if(savedata.aboutusdata[i].img[0] == "h" || savedata.aboutusdata[i].img[0] == "i" || savedata.aboutusdata[i].img == ""){
          }else{
            savedata.aboutusdata[i].img = await uploadToCloudinary(savedata.aboutusdata[i].img)
          }
        }

        for(let i=0;i<savedata.ourbrands.length;i++){
          if(savedata.ourbrands[i].img[0] == "h" || savedata.ourbrands[i].img[0] == "i" || savedata.ourbrands[i].img == ""){
          }else{
            savedata.ourbrands[i].img = await uploadToCloudinary(savedata.ourbrands[i].img)
          }
        }


        for(let i=0;i<savedata.brandimages.length;i++){
          if(savedata.brandimages[i].img[0] == "h" || savedata.brandimages[i].img[0] == "i" || savedata.brandimages[i].img == ""){
          }else{
            savedata.brandimages[i].img = await uploadToCloudinary(savedata.brandimages[i].img)
          }
        }


      const newpage = await Page.create({
        pagename,
        data:body.savedata
      });

      }

      if(body.pagename=="newsandevents"){


        
      for(let i=0;i<savedata.newsdata.length;i++){
          if(savedata.newsdata[i].img[0] == "h" || savedata.newsdata[i].img[0] == "i" || savedata.newsdata[i].img == ""){
          }else{

            savedata.newsdata[i].img = await uploadToCloudinary(savedata.newsdata[i].img)
          }
        }
    

      const newpage = await Page.create({
        pagename,
        data:savedata
      });


      }


      if(body.pagename=="aboutus"){

          for(let i=0;i<savedata.team.length;i++){
              if(savedata.team[i].img[0] == "h" || savedata.team[i].img[0] == "i" || savedata.team[i].img == ""){
              }else{

                savedata.team[i].img = await uploadToCloudinary(savedata.team[i].img)
              }
            }
        

          const newpage = await Page.create({
            pagename,
            data:savedata
          });

      }

      if(body.pagename=="investor"){

          for(let i=0;i<savedata.reports.length;i++){
            for(let j=0;j<savedata.reports[i].files.length;j++){
              if(savedata.reports[i].files[j].file[0]=="d"){
                savedata.reports[i].files[j].file = await uploadToCloudinary(savedata.reports[i].files[j].file)
              }
            }
          }

          const newpage = await Page.create({
            pagename,
            data:savedata
          });

      }


      if(body.pagename=="career"){
        const newpage = await Page.create({
            pagename,
            data:savedata
          });
      }





    }

    // const uploadPromises = await body.images.map(uploadToCloudinary);
    // const uploadedUrls = await Promise.all(uploadPromises);
    // const findContact = await Admin.findOne({email:"ARSHDEEPSINGH728281@GMAIL.COM"});


    // console.log(body)



    



    return NextResponse.json({msg:"hello world",code: 200,data:{success:"true"}},{ status: 200 })
  
  } catch (e) {
    console.error(e); 
    return NextResponse.json(
      { message: "Server error, please try again!" },
      { status: 500 }
    );
  }
}










export async function GET() {
  try {

    otp = Math.floor(100000 + Math.random() * 900000).toString();
    

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: `"Esseccera OTP" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: "Your OTP Code",
      html: `<p>Your OTP code is: <b>${otp}</b></p>`,
    });

    // console.log("Email sent:", info.messageId);

    return NextResponse.json(
      { msg: "OTP sent successfully", code: 200, success: true },
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









