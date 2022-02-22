import Link from 'next/link'
import React, {useState, useEffect} from 'react';
import { getCategories } from '../services';
import Image from 'next/image';


const Header = ( ) => {
  const [categories, setCategories] = useState([])
  
   useEffect(() => {
     getCategories()
       .then((newCategories) => setCategories(newCategories))
   }, []);
  return (
    <div className="container max-w-full mx-auto mb-8 px-10">
      <div className="flex flex-wrap items-center justify-evenly w-full py-6 gap-8  ">
        <div className="md-float-left block ">
          <Link href="/">
            <span className="cursor-pointer text-3xl font-bold text-slate-700 flex align-middle items-center gap-1 hover:animate-pulse">
               <Image
                src='/r.png' width={30} height={30} className="animate-spin hover:animate-none" alt='logo'
               />Ddoys.
            </span>
          </Link>
        </div>
        <nav className="navigation md-contents align-middle flex justify-center relative top-1 item-center ">
          <ul className='flex gap-8 flex-wrap'>
            <li className='inline text-slate-500 text-sm font-bold hover:border-b hover:border-teal-600 hover:text-teal-600'>
              <Link href='/'>Home</Link>
            </li>
            <li className='inline text-slate-500 text-sm font-bold hover:border-b hover:border-teal-600 hover:text-teal-600'>
              <Link href='/About'>About Us</Link>
            </li>
            <li className='inline text-slate-500 text-sm font-bold hover:border-b hover:border-teal-600 hover:text-teal-600'>
              <Link href='/Contact'>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="md-contents  align-middle flex justify-center flex-wrap gap-4 bg-neutral-500 ">
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className="p-3 cursor-pointer align-middle text-sm hover:bg-neutral-400 text-neutral-200 md:float-right hover:text-teal-800">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
    </div>
  )
}

export default Header
