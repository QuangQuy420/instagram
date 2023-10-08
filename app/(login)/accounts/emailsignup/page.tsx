import * as React from 'react';
import SignUpLogin from '../../../../components/SignUpLogin';
import connectMongo from '@/lib/mongo';
import userRegister from '@/utils/user_register';
import bcrypt from 'bcryptjs';
import User from '@/models/User';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export interface SignUpProps {
}

export default async function SignUp (props: SignUpProps) {
  const session = await getServerSession(authOptions);
  if (session) redirect('/')
 
  /**
   * Creates a new user account, or returns an error if the user already exists.
   * 
   * @param data The user registration data.
   * @returns An error code if the user already exists, or null if the user was successfully created.
   */
  async function myAction(data: any) {
    'use server';
    await connectMongo();
    const { email, username } = data
    const emailExist = await User.findOne({ email }).select('_id');
    const usernameExist = await User.findOne({ username }).select('_id');
    if (emailExist && usernameExist) return 1;
    if (emailExist) return 2;
    if (usernameExist) return 3;
    
    const password = await bcrypt.hash(data.password, 10);
    
    await userRegister({
      ...data,
      password: password
    });
  }

  return (
    <div>
      <SignUpLogin signUp={true} submit={myAction}/>
    </div>
  );
}