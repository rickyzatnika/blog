import React from 'react';
import Image from 'next/image';



const Author = ({ author }) => {
  return (
    <div className='text-center mt-20 mb-8 p-8 mx-auto w-80 relative rounded-lg shadow-lg bg-neutral-100'>
      <div className="absolute left-2  top-5 ">
        <div className="flex items-center justify-center align-middle mr-2 border-b">
          <Image
            priority={true}
            alt={author.name}
            width={28}
            heigth={28}
            className='animate-bounce relative align-middle  rounded-full'
            src={author.photo.url}
          />
          
        </div>
      </div>  
      <h3 className='text-neutral-700 my-4 text-2xl font-bold '>{author.name}</h3>
    
    </div>
  )
}

export default Author