import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact US</title>
        <meta name='description' content='hubungi kami untuk informasi lebih lanjut'/>
      </Head>
      <motion.div exit={{ opacity: 0 }}>
        <div className='text-center h-screen'>
            <h2 className='text-4xl'>Contact Page</h2>
        </div>
      </motion.div>
    
    </>
  )
}

export default Contact