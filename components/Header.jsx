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
    <div className="container max-w-screen-2xl mx-auto mb-8 px-10">
      <div className="flex flex-wrap justify-between w-full border-b border-gray-200 py-5 ">
        <div className="md-float-left block ">
          <Link href="/">
            <span className="cursor-pointer text-4xl font-bold text-white">
              Ddoys.
            </span>
          </Link>
        </div>
        <div className="md-contents  align-middle">
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className="mt-2 ml-4 cursor-pointer align-middle text-md  text-slate-200 md:float-right hover:text-white">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Header
