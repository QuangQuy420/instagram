import connectMongo from '@/lib/mongo';
import User from '@/models/User';
import { NextResponse } from 'next/server';
import bcrypt  from 'bcryptjs'
import RegisterUser from '../../../utils/userRegister'

export async function POST( req : any ) {
    try {
        const data = await req.json();
        await RegisterUser(data);
        
        return NextResponse.json({ message: "Register successfully!"}, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: "Register fail!"}, { status: 500 });
    }
}