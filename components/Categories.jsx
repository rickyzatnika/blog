import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import { getCategories } from '../services';


const Categories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories()
      .then((newCategories) => setCategories(newCategories))
  }, []);

  return (
    <div className='bg-white shadow-lg rouded-lg p-8 mb-8 pb-12 mt-8 items-center'> 
        <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
            Categories
        </h3>
        <ul>
          {categories.map((category) => (
            <li key={category.slug}>
                <Link href={`/category/${category.slug}`}>
                <span className='cursor-pointer text-stone-600 block pb-3 mb-3 border-b hover:bg-stone-200 pt-2 px-4 hover:text-stone-800'>
                  {category.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default Categories
