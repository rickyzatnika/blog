import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
export default function Custom404() {

    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 2000)
    }, [])

    return (
        <div className="container min-h-screen mx-auto flex flex-col w-full justify-center">
            <div className='text-center bg-slate-400 bg-opacity-10 rounded-xl shadow-xl p-20 flex flex-col justify-center w-96 mx-auto'>
                <div className="w-full">
                    <Image
                        width={80}
                        height={80}
                        src='/sad.png'
                    />
                </div>
                <div className='text-6xl my-3 flex justify-center flex-col'>
                    <h2 className='mb-2 font-bold text-slate-800'>404</h2>
                    <h2 className='text-xl font-bold animate-bounce text-teal-500'>PAGE NOT FOUND !!</h2>
                </div>
            </div>
        </div>
    )
}
