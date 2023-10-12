import * as React from 'react';
import Image from 'next/image';

export interface StoryProps {
}

export default function Story (props: StoryProps) {
  return (
    <div className='flex items-center'>
        <div className='flex flex-col items-center'>
            <div className='w-[87px] h-[87px] border-2 rounded-full'>

            </div>
            <span>new</span>
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
