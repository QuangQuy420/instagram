import * as React from 'react';
import SignUpLogin from '../../../../components/SignUpLogin';

export interface SignUpProps {
}

export default function SignUp (props: SignUpProps) {
  const handleSignUp = async (data: any) => {
    'use server'
    console.log('kaka');
    
  }

  return (
    <div>
      <SignUpLogin signUp={true} submit={handleSignUp}/>
    </div>
  );
}