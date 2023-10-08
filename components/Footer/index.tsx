'use client'
import * as React from 'react';
import Follower from '@/components/Follower'
import Link from 'next/link';
import { signOut } from 'next-auth/react';

export interface FooterProps {
}

export default function Footer (props: FooterProps) {

  return (
    <div className='col-span-5'>
      <button onClick={() => signOut()}>Log out</button>
      <div className='flex flex-row'>
        <Follower />
      </div>
      <div>
        <span>Suggested for you</span>
        <Link href='/explore/people'>See all</Link>
      </div>
      <ul>
        <li className='flex flex-row'>
          <Follower />
        </li>
        <li className='flex flex-row'>
          <Follower />
        </li>
        <li className='flex flex-row'>
          <Follower />
        </li>
        <li className='flex flex-row'>
          <Follower />
        </li>
      </ul>
      <div>Infomation Header</div>
    </div>
  );
}
