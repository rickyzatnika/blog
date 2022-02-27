
import Head from 'next/head';
import  { PostCard, Categories, PostWidget} from '../components';
import { getPosts } from '../services';
import {FeaturedPosts}  from '../section'
import Link from 'next/link';
import { motion } from 'framer-motion'

export default function Home({ posts }) {
  const easing = [.6, -0.05, 0.01, 0.99];
  const fadeInUp = {
    initial: {
      y: 60,
      opacity: 0
    },
    animate: {
      y:0,
      opacity: 1,
      transition: {
        duration: .6,
        ease: easing
      }
    }
  }
  return (
    <>
        <Head>
          <title>Ryza - Homepage</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="Artikel tentang Hiburan, Informasi, Kuliner, Tutorial
              dan Lifestyle Terbaru 2022"  />
        </Head>
        <motion.div 
            exit={{ opacity: 0 }}
            initial='initial'
            animate='animate'
            
            >
          <motion.div variants={fadeInUp} className="container max-w-full mx-auto mb-8 px-8">
            
            <div className="text-center text-slate-700 my-20">
              <h1 className=' text-3xl leading-loose'>
                  Menyajikan Informasi Berupa Artikel Tentang
              </h1>
              <h2 className='text-3xl'>Hiburan, Pariwisata, Kuliner, Fashion & 
                  Teknologi</h2>
              <p>Terupdate Seputar Kota Bandung dan sekitarnya</p>
            </div>
            <div>
              <FeaturedPosts/>
            </div>
            <div className="grid grid-cols-1 gap-20 lg:grid-cols-12">
              <div className="col-span-1 lg:col-span-8 w-full m-0">
                {posts.map(( post, i ) => <PostCard post={post.node} key={i}  /> )}
              </div>
              <div className="col-span-1 lg:col-span-4 ">
                <div className="top-8 relative lg:sticky">
                  <PostWidget/>
                  <Categories/>
                </div>
              </div>
            </div>
            
          </motion.div>
        </motion.div>
    </>
  )
}



export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props:{ 
      posts 
    },
    revalidate: 1
  };
}
