"use client"

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export interface SignUpLoginProps {
  signUp: boolean,
  submit: any
}

export default function SignUpLogin (props: SignUpLoginProps) {
  const { signUp, submit } = props;
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    console.log('submit');

    if(submit) {
      console.log('have a submit!');
      await submit();
    }
  }

  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <div className="flex flex-col justify-center px-6 py-12 lg:px-8 w-80 border border-zinc-400">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm flex justify-center">
          <Image
              src="/images/instagram_logo.png"
              width={174}
              height={174}
              alt="Picture of the author"
          />
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
              {signUp && (
                <>
                  <div className="mt-2">
                    <input
                      className="block w-full pl-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                      type="text"
                      placeholder='Mobile number or Email'
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mt-2">
                    <input
                      className="block w-full pl-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                      type="text"
                      placeholder='Full name'
                      onChange={(e) => setFullName(e.target.value)}
                      required
                    />
                  </div>
                </>
              )}

              <div className="mt-2">
                <input
                  className="block w-full pl-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  type="text"
                  placeholder={signUp ? 'Username' : 'Phone number, Username or Email'}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>

              <div className="mt-2">
                <input
                  className="block w-full pl-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  type="password"
                  placeholder='Password'
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

            <div>
              <button
                type="submit"
                onClick={(e) => handleSubmit(e)}
                className="flex w-full justify-center rounded-md bg-sky-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm"
              >
                {signUp ? "Sign up" : "Log in"}
              </button>
            </div>

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
