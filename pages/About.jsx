import React from 'react';
import Head  from 'next/head';

const About = () => {
  return (
    <>
      <Head>
        <title>About Us</title>
        <meta name='description' content='kami memberikan informasi seputar hiburan, travel, music, fashion, kuliner, tutorial dan berita lainnya terupdate di tahun 2022 '/>
      </Head>
      <div className='text-center'>
        <h2 className='text-4xl mt-8'>About Page</h2>
      </div>

    </>
  )
}

export default About