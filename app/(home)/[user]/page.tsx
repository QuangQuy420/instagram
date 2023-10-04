import * as React from 'react';
import Image from 'next/image';
import UserInfo from '../../../components/UserInfo';
import Story from '../../../components/Story';

export interface UserProps {
}

async function getData() {
  const res = await fetch('http://localhost:3000/api/users')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json();
}

export default async function User (props: UserProps) {
  const data = await getData();
  console.log(data.users[0]);
  
  const { avatar, nickname, bio, gender } = JSON.parse(JSON.stringify(data.users[0]));

  return (
    <>
        <div className='flex'>
            <div>
                <Image
                    src={avatar}
                    width={150}
                    height={150}
                    alt="Avatar"
                />
            </div>
            <UserInfo userInfo={{ nickname, bio, gender }}/>
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
    </>
  );
}
