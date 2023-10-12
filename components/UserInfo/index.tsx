import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';

export interface UserInfoProps {
  userInfo: {
    nickname: string,
    bio: string,
    fullName: string
  }
}

export default function UserInfo (props: UserInfoProps) {
const { nickname, bio, fullName } = props.userInfo;

  return (
    <>
        <ul>
            <li className='flex items-center mb-5'>
                <span className='text-xl mr-6'>{nickname}</span>
                <button className='bg-gray-200 mr-2 px-4 py-1 rounded-lg text-sm font-semibold'>Edit profile</button>
                <button className='bg-gray-200 mr-3 px-4 py-1 rounded-lg text-sm font-semibold'>View Archive</button>
                <FontAwesomeIcon className='w-6' icon={faGear} style={{color: "#000000",}} />
            </li>
            <li className='mb-4 flex'>
              <div className='mr-10'>
                <span className='font-semibold'>120</span>
                <span> posts</span>
              </div>
              <div className='mr-10'>
                <span className='font-semibold'>8123</span>
                <span> followers</span>
              </div>
              <div>
                <span className='font-semibold'>5</span>
                <span> following</span>
              </div>
            </li>
            {fullName && <li className='text-sm font-semibold mb-4'>{fullName}</li>}
            {bio && <li className='text-sm'>{bio}</li>}
            <li className='text-xs font-semibold'>Followed by xamtarot, alekxzsv, nguyenbalong___ + 22 more</li>
        </ul>
    </>
  );
}
