import { faBars, faClapperboard, faHouse, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faCompass, faComment, faHeart, faSquarePlus, faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import * as React from 'react';
import Link from 'next/link';

export interface NavbarProps {
}

export default function Navbar(props: NavbarProps) {
    return (
        <>
            <div className='py-10 pl-6'>
                <Image src="/images/instagram_logo.png" alt="Instagram" width="103" height="20" />
            </div>
            <ul>
                <div className="flex">
                    <FontAwesomeIcon className='w-6' icon={faHouse} style={{color: "#000000",}} />
                    <Link href='/'>Home</Link>
                </div>
                <div className="flex">
                    <FontAwesomeIcon className='w-6' icon={faMagnifyingGlass} style={{color: "#000000",}} />
                    <span>Search</span>
                </div>
                <div className="flex">
                    <FontAwesomeIcon className='w-6' icon={faCompass} style={{color: "#000000",}} />
                    <span>Explore</span>
                </div>
                <div className="flex">
                    <FontAwesomeIcon className='w-6' icon={faClapperboard} style={{color: "#000000",}} />
                    <span>Reels</span>
                </div>
                <div className="flex">
                    <FontAwesomeIcon className='w-6' icon={faComment} style={{color: "#000000",}} />
                    <span>Messages</span>
                </div>
                <div className="flex">
                    <FontAwesomeIcon className='w-6' icon={faHeart} style={{color: "#000000",}} />
                    <span>Notifications</span>
                </div>
                <div className="flex">
                    <FontAwesomeIcon className='w-6' icon={faSquarePlus} style={{color: "#000000",}} />
                    <span>Create</span>
                </div>
                <div className="flex">
                    <FontAwesomeIcon className='w-6' icon={faUser} style={{color: "#000000",}} />
                    <span>Frofile</span>
                </div>
                <div className="flex">
                    <FontAwesomeIcon className='w-6' icon={faBars} style={{color: "#000000",}} />
                    <span>More</span>
                </div>
            </ul>
        </>
    );
}