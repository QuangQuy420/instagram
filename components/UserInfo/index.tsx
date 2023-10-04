import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';

export interface UserInfoProps {
  userInfo: {
    nickname: string,
    bio: string,
    gender: string
  }
}

export default function UserInfo (props: UserInfoProps) {
const { nickname, bio, gender } = props.userInfo;

  return (
    <>
        <ul>
            <li className='flex'>
                <span>{nickname}</span>
                <button>Edit profile</button>
                <button>View Archive</button>
                <FontAwesomeIcon className='w-6' icon={faGear} style={{color: "#000000",}} />
            </li>
            <li>
              <span>7 posts</span>
              <button>0 follower</button>
              <button>92 following</button>
            </li>
            <li>Phan Quang Quy</li>
            <li>{bio}</li>
            <li>Followed by xamtarot, alekxzsv, nguyenbalong___ + 22 more</li>
        </ul>
    </>
  );
}
