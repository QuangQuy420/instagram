import * as React from 'react';
import Follower from '../../../components/Follower';

export interface AppProps {
}

export default function People (props: AppProps) {
  return (
    <>
        <div>Suggested</div>
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
    </>
  );
}
