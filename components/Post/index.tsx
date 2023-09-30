import * as React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { faBookmark, faComment, faHeart, faShareFromSquare } from '@fortawesome/free-regular-svg-icons';

export interface PostProps {
}

export default function Post (props: PostProps) {
  return (
    <div className='flex flex-col w-[470px]'>
        <div className='flex justify-between w-full'>
            <div className='flex'>
                <Image
                    src="/images/avatar.jpg"
                    width={32}
                    height={32}
                    alt="Picture of the author"
                />
                <span>name</span>
                <span>hour</span>
            </div>
            <FontAwesomeIcon className='w-3' icon={faEllipsis} style={{color: "#000000",}} />
        </div>

        <Image
            src="/images/avatar.jpg"
            width={586}
            height={586}
            alt="Picture of the author"
        />

        <div className='flex justify-between'>
            <div className='flex'>
                <FontAwesomeIcon className='w-6' icon={faHeart} style={{color: "#000000",}} />
                <FontAwesomeIcon className='w-6' icon={faComment} style={{color: "#000000",}} />
                <FontAwesomeIcon className='w-6' icon={faShareFromSquare} style={{color: "#000000",}} />
            </div>
            <FontAwesomeIcon className='w-6' icon={faBookmark} style={{color: "#000000",}} />
        </div>

        <div>2 like</div>

        <div>
            <span>quy.pq__</span>
            <span>Chợt nhận ra hôm nay đã là cuối tháng 9. Nhanh thiệc. Tháng này là tháng... </span>
            <button className='flex'>more</button>
            <button>see translate</button>
        </div>

        <input type="text" placeholder='Add a comment...'/>
    </div>
  );
}
