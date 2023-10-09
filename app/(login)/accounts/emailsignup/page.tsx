import * as React from 'react';
import SignUpLogin from '../../../../components/SignUpLogin';
import userRegister from '@/utils/user_register';
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
    const response = await userRegister(data);
    
    if(response) return 1;
  }

  return (
    <div>
      <SignUpLogin signUp={true} submit={myAction}/>
    </div>
  );
}