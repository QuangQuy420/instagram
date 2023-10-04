import { NextResponse } from 'next/server';
import connectMongo from '../../../lib/mongo';
import User from '../../../models/User';

export const GET = async () => {
    try {
        await connectMongo();
        const users = await User.find();
        return new NextResponse(JSON.stringify({ users }), { status: 200 })
    } catch (error) {
        return new NextResponse('Error ' + error, { status: 500 })
    }
} 