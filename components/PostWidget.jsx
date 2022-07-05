import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Link from 'next/link';
import { getRecentPosts, getSimilarPosts } from '../services';
import Image from 'next/image';

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);
  useEffect(() => {
    if(slug) {
      getSimilarPosts(categories, slug)
          .then((result) => setRelatedPosts(result))
    } else {
      getRecentPosts()
          .then((result) => setRelatedPosts(result))
    }
  }, [categories, slug])


  
 
  return(

    <div className='bg-white shadow-lg rouded-lg p-8 mb-8 mt-8 '> 
        <h3 className='text-xl mb-8 font-semibold border-b pb-4 pt-6'>
          {slug ? 'Post Terkait' : 'Post Terbaru'}
        </h3>
        {relatedPosts.map((post) => (
          <div key={post.title} className="flex items-center w-full mb-8 transition-opacity opacity-80 hover:opacity-100">
            <div className="w-16 flex-none overflow-hidden">
              <Image priority={true} src={post.featuredImage.url} alt={post.title} 
                width={90} 
                height={90}
                
                className='align-middle rounded-full  '
                layout='responsive'
                objectFit='cover'
              />
            </div>
            <div className='flex-grow ml-4'>
              <p className='text-gray-500 text-xs'>
                {moment(post.createdAt).format('MMM DD, YYYY')}
              </p>
              <Link href={`/post/${post.slug}`} key={post.title} passHref={true}>
                {post.title}
              </Link>
            </div>
          </div>
        ))}
    </div>
  )
}

export default PostWidget
