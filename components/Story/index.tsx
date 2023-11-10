import * as React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export interface StoryProps {
}

export default function Story (props: StoryProps) {
  return (
    <div className='flex items-center'>
        <div className='flex flex-col items-center'>
            <div className='w-[87px] h-[87px] border-2 rounded-full flex justify-center items-center bg-[#fafafa]'>
            <FontAwesomeIcon className='w-6' icon={faPlus} style={{color: "#c7c7c7", fontSize: "44px", width: "44px", backgroundColor: "#fafafa"}} />
            </div>
            <span className='text-xs font-semibold'>New</span>
        </div>
        <ul className='flex flex-row'>
            <li>
                <div>
                    <Image
                    src="/images/avatar.jpg"
                    width={56}
                    height={56}
                    alt="Picture of the author"
                    />
                </div>
                <span>Name of author</span>
            </li>
            <li>
                <div>
                    <Image
                    src="/images/avatar.jpg"
                    width={56}
                    height={56}
                    alt="Picture of the author"
                    />
                </div>
                <span>Name of author</span>
            </li>
            <li>
                <div>
                    <Image
                    src="/images/avatar.jpg"
                    width={56}
                    height={56}
                    alt="Picture of the author"
                    />
                </div>
                <span>Name of author</span>
            </li>
            <li>
                <div>
                    <Image
                    src="/images/avatar.jpg"
                    width={56}
                    height={56}
                    alt="Picture of the author"
                    />
                </div>
                <span>Name of author</span>
            </li>
            <li>
                <div>
                    <Image
                    src="/images/avatar.jpg"
                    width={56}
                    height={56}
                    alt="Picture of the author"
                    />
                </div>
                <span>Name of author</span>
            </li>
            <li>
                <div>
                    <Image
                    src="/images/avatar.jpg"
                    width={56}
                    height={56}
                    alt="Picture of the author"
                    />
                </div>
                <span>Name of author</span>
            </li>
        </ul>  
    </div>
  );
}
