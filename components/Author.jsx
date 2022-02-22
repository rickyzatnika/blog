import React from 'react';



const Author = ({ author }) => {
  return (
    <div className='text-center mt-20 mb-8 p-12 relative rounded-lg shadow-lg bg-gray-50'>
      <div className="absolute left-20 right-0 -top-8">
        <img
          alt={author.name}
          width="70px"
          heigth="70px"
          layout='fill'
          className=' animate-bounce align-middle rounded-full shadow-xl  '
          src={author.photo.url}
         
        />
       
      </div>  
      <h3 className='text-teal-700 my-4 text-3xl font-bold '>{author.name}</h3>
      <p className='text-gray-700 text-sm'>{author.bio}</p>
    </div>
  )
}

export default Author