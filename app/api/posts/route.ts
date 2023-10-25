import { NextResponse } from 'next/server';
import connectMongo from '../../../lib/mongo';
import Post from '../../../models/Post';

export const GET = async () => {
    try {
        await connectMongo();
        const posts = await Post.find();
        return new NextResponse(JSON.stringify({ data: { posts }}), { status: 200 })
    } catch (error) {
        return new NextResponse('Error ' + error, { status: 500 })
    }
} 