
import Head from 'next/head';
import  { PostCard, Categories, PostWidget, Hero} from '../components';
import { getPosts } from '../services';
import {FeaturedPosts}  from '../section'


export default function Home({ posts }) {
  return (
    <div className="container mx-auto mb-8  px-20">
      <Head>
        <title>My Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero/>
      <FeaturedPosts/>
      <div className="grid grid-cols-1 gap-20 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8 ">
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
