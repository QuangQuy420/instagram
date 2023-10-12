import * as React from 'react';
import Image from 'next/image';
import UserInfo from '../../../components/UserInfo';
import Story from '../../../components/Story';
import { getServerSession } from "next-auth";
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export interface UserProps {
}

/**
 * Call api to get user information.
 * 
 * @param nickname 
 * @returns Data about user
 */
async function getData(nickname: any) {
  const res = await fetch('http://localhost:3000/api/users', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nickname: nickname })
  })
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Error in process get data user');
  }
 
  return res.json();
}

export default async function User (props: UserProps) {
  // Get data from session to call api
  const session = await getServerSession(authOptions);
  const nickname = session?.user?.name?.nickname;
  const data = await getData(nickname);
  const { avatar, bio, gender, fullName } = data.user;

  return (
    <div className='w-[935px] pt-6 px-4 mr-auto ml-auto'>
        <div className='flex justify-center my-8 '>
            <div className='mr-28'>
                <Image className='rounded-full'
                    src={avatar}
                    width={150}
                    height={150}
                    alt="Avatar"
                />
            </div>
            <UserInfo userInfo={{ nickname, bio, fullName }}/>
        </div>
        <div>
            <Story />
        </div>
        <div>
          <button>POSTS</button>
          <button>SAVED</button>
          <button>TAGGED</button>
        </div>
        <ul className='grid grid-cols-3'>
          <li>
            <Image
                src="/images/avatar.jpg"
                width={309}
                height={309}
                alt="Picture of the author"
            />
          </li>
          <li>
            <Image
                src="/images/avatar.jpg"
                width={309}
                height={309}
                alt="Picture of the author"
            />
          </li>
          <li>
            <Image
                src="/images/avatar.jpg"
                width={309}
                height={309}
                alt="Picture of the author"
            />
          </li>
          <li>
            <Image
                src="/images/avatar.jpg"
                width={309}
                height={309}
                alt="Picture of the author"
            />
          </li>
          <li>
            <Image
                src="/images/avatar.jpg"
                width={309}
                height={309}
                alt="Picture of the author"
            />
          </li>
          <li>
            <Image
                src="/images/avatar.jpg"
                width={309}
                height={309}
                alt="Picture of the author"
            />
          </li>
          <li>
            <Image
                src="/images/avatar.jpg"
                width={309}
                height={309}
                alt="Picture of the author"
            />
          </li>
          <li>
            <Image
                src="/images/avatar.jpg"
                width={309}
                height={309}
                alt="Picture of the author"
            />
          </li>
          <li>
            <Image
                src="/images/avatar.jpg"
                width={309}
                height={309}
                alt="Picture of the author"
            />
          </li>
          <li>
            <Image
                src="/images/avatar.jpg"
                width={309}
                height={309}
                alt="Picture of the author"
            />
          </li>
        </ul>
    </div>
  );
}
