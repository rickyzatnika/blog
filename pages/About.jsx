import React from 'react';
import Head  from 'next/head';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <>
      <Head>
        <title>About Us</title>
        <meta name='description' content='kami memberikan informasi seputar hiburan, travel, music, fashion, kuliner, tutorial dan berita lainnya terupdate di tahun 2022 '/>
      </Head>
      <motion.div exit={{ opacity: 0 }}>
        <div className='text-center'>
          <h2 className='text-4xl mt-8'>About Page</h2>
        </div>
      </motion.div>

    </>
  )
}

export default About