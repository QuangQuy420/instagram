import * as React from 'react';
import Image from 'next/image';

export interface StoryProps {
}

export default function Story (props: StoryProps) {
  return (
    <>
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
    </>
  );
}
