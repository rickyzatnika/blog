
import Head from 'next/head';
import  { PostCard, Categories, PostWidget} from '../components';
import { getPosts } from '../services';
import {FeaturedPosts}  from '../section'


export default function Home({ posts }) {
  return (
    <div className="container w-full mx-auto mb-8  lg:px-10 md:px-8 sm:px-4">
      <Head>
        <title>My Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="text-center my-20">
        <h1 className=' text-2xl text-slate-700'>
            Blog seputar Hiburan, Informasi, Kuliner, Tutorial <br /> dan Lifestyle Terbaru 2022 .
        </h1>
      </div>
      <FeaturedPosts/>
      <div className="grid grid-cols-1 gap-20 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8 w-full m-0">
          {posts.map(( post ) => <PostCard post={post.node} key={post.title}  /> )}
        </div>
        <div className="col-span-1 lg:col-span-4 ">
          <div className="top-8 relative lg:sticky">
            <PostWidget/>
            <Categories/>
          </div>
        </div>
      </div>
    </div>
  )
}



export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props:{ posts }
  }
}
