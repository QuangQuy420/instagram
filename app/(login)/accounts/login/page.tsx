import * as React from 'react';
import SignUpLogin from '../../../../components/SignUpLogin';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export interface LoginProps {
}

export default async function Login (props: LoginProps) {
  const session = await getServerSession(authOptions);
  if (session) redirect('/')

  const handleLogin = async (data: any) => {
    'use server'
    // console.log('data', data);
  }

  return (
    <div>
      <SignUpLogin signUp={false} submit={handleLogin}/>
    </div>
  );
}
