import React from 'react';




const Author = ({ author }) => {
  return (
    <div className='text-center mt-20 mb-8 p-8 mx-auto w-80 relative rounded-lg shadow-lg bg-neutral-100'>
      <div className="absolute left-4  top-2">
        <div className="flex items-center justify-center align-middle mr-2 border-b">
          <img
            alt={author.name}
            width='25px'
            heigth='25px'
            className='relative animate-bounce align-middle rounded-full shadow-xl  '
            src={author.photo.url}
          
          />
          <p className='absolute left-6 right-0 text-neutral-400'>createdBy_</p>
        </div>
      </div>  
      <h3 className='text-teal-700 my-4 text-3xl font-bold '>{author.name}</h3>
      <p className='text-neutral-400 text-sm'>{author.bio}</p>
    </div>
  )
}

export default Author