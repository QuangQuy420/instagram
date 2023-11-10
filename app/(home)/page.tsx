import * as React from 'react';
import Footer from '../../components/Footer';
import Story from '../../components/Story';
import Post from '../../components/Post';

export interface HomeProps {
}

export default function Home(props: HomeProps) {
  return (
    <div className='grid grid-cols-12'>
      <div className='col-span-7'>
        <div>
          <Story />
        </div>
        <div className='flex items-center flex-col'>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </div>
      <Footer />
    </div>
  );
}

