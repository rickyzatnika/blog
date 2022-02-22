import Link from 'next/link'
import React, {useState, useEffect} from 'react';
import { getCategories } from '../services';



const Header = ( ) => {
  const [categories, setCategories] = useState([])
  
   useEffect(() => {
     getCategories()
       .then((newCategories) => setCategories(newCategories))
   }, []);
  return (
    <div className="container max-w-full mx-auto mb-8 px-10">
      <div className="flex flex-wrap items-center justify-between w-full border-b border-gray-200 py-5 ">
        <div className="md-float-left block ">
          <Link href="/">
            <span className="cursor-pointer text-3xl font-bold text-slate-700">
              Ddoys.
            </span>
          </Link>
        </div>
        <nav className="navigation md-contents  align-middle">
          <ul className='flex flex-wrap'>
            <li className='inline ml-3 text-slate-700 text-xs'>
              <Link href='/'>Home</Link>
            </li>
            <li className='inline ml-3 text-slate-700 text-xs'>
              <Link href='/About'>About Us</Link>
            </li>
            <li className='inline ml-3 text-slate-700 text-xs'>
              <Link href='/Contact'>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="md-contents  align-middle">
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className="mt-2 ml-4 cursor-pointer align-middle text-sm  text-slate-500 md:float-right hover:text-teal-600">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
    </div>
  )
}

export default Header
