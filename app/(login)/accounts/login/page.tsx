import * as React from 'react';
import SignUpLogin from '../../../../components/SignUpLogin';

export interface LoginProps {
}

export default function Login (props: LoginProps) {
  const handleLogin = async (data: any) => {
    'use server'
    console.log('data', data);
  }

  return (
    <div>
      <SignUpLogin signUp={false} submit={handleLogin}/>
    </div>
  );
}
