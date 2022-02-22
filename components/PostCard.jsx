import React from 'react';
import moment from 'moment';
import Link from 'next/link';
import Image from 'next/image';


const PostCard = ({ post }) => {
 
  return (
    <div className='bg-white shadow-lg rounded;lg p-0 lg:p-8 pb-12 mb-8 mt-8 px-4'>
      
      <div className="relative overflow-hidden shadow-md mb-2 max-w-full">
        <Image src={post.featuredImage.url} alt={post.title} 
          className='object-cover shadow-lg  transition duration-700 delay-100 hover:scale-125 hover:ease-in-out'
          width={800}
          height={500}
          objectFit='cover'
          objectPosition='center'
          layout='responsive'
          />
   
  
      </div>
      <div className="block lg:flex  items-center  mb-8 w-full">
        <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
          <Image  alt={post.author.name} height="28px" width="28px" className='align-middle rounded-full'
          src={post.author.photo.url} 
          />
          <p className='inline align-middle text-gray-700 ml-2 text-md'>{post.author.name}</p>
        </div>
        <div className=" font-medium text-gray-700">
          <div className="flex align-middle items-center gap-1 justify-center">
            <Image src="https://img.icons8.com/color/48/000000/calendar-16.png" alt='calendar icon'
            height="28px" width="28px" />
            <span className='text-sm text-gray-700'>{moment(post.createdAt).format('MMM DD, YYYY')}</span>
          </div>
        </div>
      </div>
      <h1 className='text-gray-700 transition duration-300 mb-4 cursor-pointer text-center p-2 hover:text-teal-600 text-3xl font-medium'>
        <Link href={`/post/${post.slug}`}>
          {post.title}
        </Link>
      </h1>
      
      <p className="text-md font-normal text-gray-600 px-4 lg:px-2 mb-8">{post.excerpt}</p>
      <div className="text-center">
        <Link href={`/post/${post.slug}`}>
          <span className='text-gray-700 hover:text-white cursor-pointer transition duration-300 border-2  p-2 px-8 rounded-2xl  hover:bg-inherit hover:border-0 hover:shadow-md hover:shadow-teal-400/80 hover:border-solid hover:bg-teal-500 hover:transition  hover:duration-700 '>Read <b className='hover:transform'>→</b></span>
        </Link>
      </div>
    </div>
  )
}

export default PostCard
