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


   const [click, setClick] = useState(false);
   const handleClick = () => setClick(!click);
   const closeMobileMenu = () => setClick(false);

  return (
    <div className="container max-w-full mx-auto mb-8 px-10">
      <div className="flex flex-wrap items-center justify-arround w-full py-6 px-4 ">
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
            <li className='inline text-neutral-700 text-sm font-bold hover:border-b hover:border-teal-600 hover:text-teal-600'>
              <Link href='/'>Home</Link>
            </li>
            <li className='inline text-neutral-700 text-sm font-bold hover:border-b hover:border-teal-600 hover:text-teal-600'>
              <Link href='/About'>About Us</Link>
            </li>
            <li className='inline text-neutral-700 text-sm font-bold hover:border-b hover:border-teal-600 hover:text-teal-600'>
              <Link href='/Contact'>Contact</Link>
            </li>
          </ul>
        </nav>
      
        <button onClick={handleClick} type="button" aria-controls='mobile-menu' aria-expanded="false" className='z-40 menu'>
              <span className='sr-only'></span>
              {!click ? (
                <svg className='block h-6 w-6' xmlns='http:www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' aria-hidden='true'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16'/>
                </svg>
              ):(
                <svg className='block h-6 w-6' xmlns='http:www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' aria-hidden='true'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12'/>
                </svg>
              )}
        </button>
      </div>
       <div className=" flex items-center align-middle">
        <ul onClick={handleClick}  className={click ? 'navList active' : 'navList '}>
              {categories.map((category) => (
                <li  key={category.slug}>
                  <Link href={`/category/${category.slug}`} onClick={closeMobileMenu}>
                    <span className="p-3 cursor-pointer align-middle text-sm transition ease-in delay-50 hover:bg-neutral-300  text-neutral-200 md:float-right hover:text-teal-800">
                      {category.name} 
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
       </div>
    </div>
  )
}

export default Header
