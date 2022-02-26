import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className="container bg-black bg-opacity-90 block text-center md:flex justify-around align-middle items-center max-w-full">
      <p  className="text-teal-700 hover:text-teal-500">© 2021 - 2022<Link href='https://ryza.vercel.app/'> ryza.vercel.app</Link></p>
        <p className='text-stone-700'>sponsor by : </p>
        <div className="flex gap-2 justify-center">
          <p className='text-teal-700 underline hover:text-teal-500 '> <Link href='/'>Privacy Police</Link> </p>
          <p className='text-teal-700 underline hover:text-teal-500 '> <Link href='/'>Disclaimer</Link> </p>
        </div>
      
    </div>
  )
}
