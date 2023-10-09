import { NextResponse } from 'next/server';
import connectMongo from '../../../lib/mongo';
import User from '../../../models/User';

export const POST = async (request: Request) => {
    try {
        const body = await request.json();
        await connectMongo();
        const user = await User.findOne({ nickname: body.nickname });
        
        return new NextResponse(JSON.stringify({ user }), { status: 200 })
    } catch (error) {
        return new NextResponse('Error ' + error, { status: 500 })
    }
} 