"use client"

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useForm, SubmitHandler } from "react-hook-form"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

export interface SignUpLoginProps {
  signUp: boolean,
  submit: any
}

export default function SignUpLogin (props: SignUpLoginProps) {
  const { signUp, submit } = props;

  const router = useRouter()
  const { register, handleSubmit, reset, formState: { errors }, } = useForm();
  const [emailExist, setEmailExist] = useState('');
  const [usernameExist, setUsernameExist] = useState('');
  const [registerSuccess, setSuccessRegister] = useState(false);
  const [errorLogin, setErrorLogin] = useState('');

  /**
   * Handles when the user clicks the submit button.
   * Assumes that the `submit` and `signUp` variables are defined elsewhere.
   * 
   * @param data The info of the form, that the user input.
   */
  const onSubmit = async (data: any) => {
    if (submit) {
      if (signUp) {
        await handleRegister(data);
      } else {
        await handleLogin(data);
      }
    }
  }
  
  /**
   * Handles when the user registers a new account.
   * Returns early if the user account already exists.
   * 
   * @param data the info include email, username, fullName and password.
   * @returns When account already exist.
   */
  const handleRegister = async (data: any) => {
    try {
      const submitError = await submit(data);
      if (submitError === 1) {
        setEmailExist('Email already exists');
        setUsernameExist('Username already exists');
        return;
      }
      if (submitError === 2) {
        setEmailExist('Email already exists');
        return;
      }
      if (submitError === 3) {
        setUsernameExist('Username already exists');
        return;
      }
      reset()
      if (signUp) {
        setSuccessRegister(true);
        setTimeout(() => {
          router.push('/accounts/login')
        }, 3000)
        
      }
    } catch (error) {
      throw new Error('Error when sending data to server');
    }
  }

  /**
   * Handle when login page.
   * Replaces the current page with the home page if the user successfully logs in.
   * 
   * @param data The info include username and password.
   * @returns Error when the info incorrect.
   */
  const handleLogin = async (data: any) => {
    try {
      const { username, password } = data;
      const res = await signIn('credentials', {
        username,
        password,
        redirect: false
      });

      if (res?.error) {
        setErrorLogin('User name or password not correct!');
        return;
      }
      router.replace('/');
    } catch (error) {
      throw new Error('Error when login');
    }
  }

  /**
   * When input, delete error on form
   */
  const onEmailChange = () => {
    setEmailExist('');
  }

  /**
   * When input, delete error on form
   */
  const onUsernameChange = () => {
    setUsernameExist('');
    setErrorLogin('');
  }

  /**
   * When input, delete error on form
   */
  const onPasswordChange = () => {
    setErrorLogin('');
  }

  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <div className="flex flex-col justify-center px-6 py-12 lg:px-8 w-80 border border-zinc-400">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm flex justify-center">
          <Image
              src="/images/instagram_logo.png"
              width={174}
              height={174}
              alt="The logo of instagram"
          />
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              {signUp && (
                <>
                  <div className="mt-2">
                    <input
                      className="block w-full pl-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                      placeholder='Mobile number or Email'
                      {...register("email", { required: true, onChange: onEmailChange })}
                    />
                    {(errors.mobileNumber || emailExist) && <span className='text-red-600'>{emailExist ? emailExist :'This field is required'}</span>}
                  </div>

                  <div className="mt-2">
                    <input
                      className="block w-full pl-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                      type="text"
                      placeholder='Full name'
                      {...register("fullName", { required: true })}
                    />
                    {errors.fullName && <span className='text-red-600'>This field is required</span>}
                  </div>
                </>
              )}

              <div className="mt-2">
                <input
                  className="block w-full pl-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  type="text"
                  placeholder={signUp ? 'Username' : 'Phone number, Username or Email'}
                  {...register("username", { required: true, onChange: onUsernameChange })}
                />
                {(errors.username || usernameExist) && <span className='text-red-600'>{usernameExist ? usernameExist : 'This field is required'}</span>}
              </div>

              <div className="mt-2">
                <input
                  className="block w-full pl-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  type="password"
                  placeholder='Password'
                  {...register("password", { required: true, minLength: 6, onChange: onPasswordChange })}
                />
                {errors.password && <span className='text-red-600'>{errors.password.type === 'required' ? 'This field is required' : 'Password is at least 6 character'}</span>}
              </div>

              {errorLogin && <span className='text-red-600'>{errorLogin}</span>}

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-sky-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm"
              >
                {signUp ? "Sign up" : "Log in"}
              </button>
            </div>

            {registerSuccess && <span className='text-green-600'>Register successfully! You will be navigate to login page after 3 seconds</span>}
            
            {!signUp && (
              <div className="flex items-center justify-center">
                <div className="text-sm">
                  <a href="#" className="font-semibold text-sky-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
      <div className="flex justify-center px-6 py-6 lg:px-8 w-80 border border-zinc-400 mt-3">
        <span>{signUp ? "Have an account?" : "Don't have an account?"}</span>
        <Link href={signUp ? "/accounts/login" : "/accounts/emailsignup"} className='font-semibold text-sky-600 ml-1'>{signUp ? "Log in" : "Sign Up"}</Link>
      </div>
    </div>
  );
}