import { NextResponse } from 'next/server';
import connectMongo from '../../../lib/mongo';
import Post from '../../../models/Post';
import S3 from 'aws-sdk/clients/s3';
import { randomUUID } from "crypto";

const s3 = new S3({
    apiVersion: "2006-03-01",
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
    region: process.env.AWS_REGION,
    signatureVersion: "v4",
})

export default async function handler(
    req: any,
    res: any
  ) {
    const ex = (req.query.fileType as string).split("/")[1];
  
    const Key = `${randomUUID()}.${ex}`;
  
    const s3Params = {
      Bucket: process.env.BUCKET_NAME,
      Key,
      Expires: 60,
      ContentType: `image/${ex}`,
    };
  
    const uploadUrl = await s3.getSignedUrl("putObject", s3Params);
  
    console.log("uploadUrl", uploadUrl);
  
    res.status(200).json({
      uploadUrl,
      key: Key,
    });
  } 

export const GET = async () => {
    try {
        await connectMongo();
        const posts = await Post.find();
        return new NextResponse(JSON.stringify({ data: { posts }}), { status: 200 })
    } catch (error) {
        return new NextResponse('Error ' + error, { status: 500 })
    }
} 