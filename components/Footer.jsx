import React from 'react';
import Link from 'next/link';


export default function Footer() {
  
  return (
    
    <>
      <div className="container bg-gray-200 bg-opacity-60 mt-20 p-6 md:p-20 mx-auto w-full flex flex-col justify-center text-center rounded-md">
        <p className='  text-center text-neutral-600 mb-8'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet deleniti quis, ad et dicta voluptatibus voluptas cumque quae, aperiam sunt repudiandae nisi aspernatur voluptate doloribus consequatur, hic distinctio dolor autem atque. Asperiores ab animi aspernatur possimus nemo doloremque, magni temporibus consequuntur voluptas! Fugiat voluptatibus qui reiciendis facilis sint, culpa ea!</p>
        <small className='my-8 text-neutral-700'>Jangan Lupa Follow Mimin ya :D</small>
        <div className="sosmed tex-center flex justify-center gap-8 underline">
          <div className="text-neutral-500 text-sm hover:text-blue-400"><Link href='https://www.facebook.com/ryzstore.bdg'>Facebook</Link></div>
          <div className="text-neutral-500 text-sm hover:text-pink-500"><Link href='https://www.instagram.com/ricky.zatnika/'>Instagram</Link></div>
          <div className="text-neutral-500 text-sm hover:text-cyan-500"><Link href='https://twitter.com/i/flow/login'>Twitter</Link></div>
        </div>
      </div>
      <div className="container bg-black bg-opacity-90 block text-center py-3 md:flex justify-around align-middle items-center max-w-full">
        <small className="text-teal-700  hover:text-teal-500">© 2021 - 2022<Link href='https://ryza.vercel.app/'> ryza.vercel.app</Link></small>
        <small className='text-stone-700 '>sponsor by : </small>
        <div className="flex gap-2 justify-center">
          <small className='text-teal-700 underline  hover:text-teal-500 '> <Link href='/'>Privacy Police</Link> </small>
          <small className='text-teal-700 underline  hover:text-teal-500 '> <Link href='/'>Disclaimer</Link> </small>
        </div>
      </div>
    </>
  )
}
