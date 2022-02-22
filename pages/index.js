
import Head from 'next/head';
import  { PostCard, Categories, PostWidget} from '../components';
import { getPosts } from '../services';
import {FeaturedPosts}  from '../section'
import Link from 'next/link';


export default function Home({ posts }) {
  return (
    <>
        <Head>
          <title>Ryza - Homepage</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="Blog seputar Hiburan, Informasi, Kuliner, Tutorial
              dan Lifestyle Terbaru 2022"  />
        </Head>
        <div className="container max-w-full mx-auto mb-8 px-8">
          
          <div className="text-center my-20">
            <h1 className=' text-2xl text-slate-700'>
                Blog seputar Hiburan, Informasi, Kuliner, Tutorial <br /> dan Lifestyle Terupdate 
            </h1>
          </div>
          <FeaturedPosts/>
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
          <div className="container bg-gray-200 mt-20 p-20 mx-auto w-full flex flex-col justify-center text-center rounded-md">
            <p className='  text-center text-neutral-600 mb-8'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet deleniti quis, ad et dicta voluptatibus voluptas cumque quae, aperiam sunt repudiandae nisi aspernatur voluptate doloribus consequatur, hic distinctio dolor autem atque. Asperiores ab animi aspernatur possimus nemo doloremque, magni temporibus consequuntur voluptas! Fugiat voluptatibus qui reiciendis facilis sint, culpa ea!</p>
            <small className='mb-4'>Jangan Lupa Follow Mimin ya :D</small>
            <div className="sosmed tex-center flex justify-center gap-8 underline">
              <div className="text-neutral-500 text-sm hover:text-blue-500"><Link href='https://www.facebook.com/ryzstore.bdg'>Facebook</Link></div>
              <div className="text-neutral-500 text-sm hover:text-pink-500"><Link href='https://www.instagram.com/ricky.zatnika/'>Instagram</Link></div>
              <div className="text-neutral-500 text-sm hover:text-cyan-500"><Link href='https://twitter.com/i/flow/login'>Twitter</Link></div>
            </div>
          </div>
        </div>
    </>
  )
}



export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props:{ posts }
  }
}
