import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

export interface FollowerProps {
}

export default function Follower (props: FollowerProps) {
  return (
    <>
        <div>
            <Image
              src="/images/avatar.jpg"
              width={44}
              height={44}
              alt="Picture of the author"
            />
        </div>
        <div className='flex flex-col'>
            <Link href='/'>Name of page</Link>
            <span>popular</span>
        </div>
        <button>Follow</button>
    </>
  );
}
