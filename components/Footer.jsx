import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className='text-center py-6 text-white bg-black bg-opacity-90 text-md'>Allright reserved © 2022
        <div className="text-teal-700 underline hover:text-teal-500 w-fit mx-auto">
            <Link href='https://ryza.vercel.app/'> ryza.vercel.app</Link>
        </div>
    </div>
  )
}
