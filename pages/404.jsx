import React, { useEffect }  from 'react'
import { useRouter } from 'next/router'

export default function Custom404() {

    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 3000)
    }, [])

  return (
    <div className='text-center lg:mt-40 md:mt-10 bg-slate-400 bg-opacity-10 rounded-full shadow-xl max-w-fit mx-auto p-20'>
        <h4>Oppppssssss..</h4>
        <div className='text-6xl my-8 flex justify-center flex-col'>
            404
            <h2 className='text-3xl font-bold animate-bounce text-teal-500'>PAGE NOT FOUND !!</h2>
        </div>
        <h4 className='uppercase'>Halaman yang kamu tuju tidak ada</h4>
    </div>
  )
}
