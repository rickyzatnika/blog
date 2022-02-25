import React from 'react';




const Author = ({ author }) => {
  return (
    <div className='text-center mt-20 mb-8 p-8 mx-auto w-80 relative rounded-lg shadow-lg bg-neutral-100'>
      <div className="absolute left-4  top-5 ">
        <div className="flex items-center justify-center align-middle mr-2 border-b">
          <img
            alt={author.name}
            width='28px'
            heigth='28px'
            className='animate-bounce relative align-middle  rounded-full'
            src={author.photo.url}
          />
          <p className='absolute left-8 right-0 text-neutral-500'>postBy_</p>
        </div>
      </div>  
      <h3 className='text-neutral-700 my-4 text-2xl font-bold '>{author.name}</h3>
      <p className='text-neutral-400 text-xs leading-7 p-0'>{author.bio}</p>
    </div>
  )
}

export default Author