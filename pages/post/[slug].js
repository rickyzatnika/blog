import React from 'react';
import { getPosts, getPostDetails } from '../../services';
import { PostDetail, Categories, PostWidget, Author, Comments, CommentsForm, Loader } from '../../components'
import { useRouter } from 'next/router';
import { AdjacentPosts } from '../../section';
import { motion } from 'framer-motion'



const PostDetails = ({ post }) => {
  const router = useRouter();
  if(router.isFallback) {
    return <Loader/>
  }

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
    <motion.div exit={{ opacity: 0 }} initial='inital' animate='animate'
        className='container mx-auto px-4 mb-8'>
        <motion.div variants={fadeInUp} className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="col-span-1 lg:col-span-8">
            <PostDetail post={post}/>
           
            
              <AdjacentPosts slug={post.slug} createdAt={post.createdAt} />
            
            <Comments slug={post.slug}/>
            <CommentsForm slug={post.slug}/>
            
          </div>
          <div className="col-span-1 lg:col-span-4">
            <div className="relative lg:sticky top-8">
              <PostWidget slug={post.slug} categories={post.categories.map((category) => category.slug)}/>
              <Categories/>
            </div>
          </div>
        </motion.div>
    </motion.div>
  )
}

export default PostDetails;


export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);

  return {
    props:{
      post: data 
    },
    revalidate: 1,
  }
}

export async function getStaticPaths() {
  const posts = await getPosts();

  return {
    paths: posts.map(( {node: {slug}}) => ({params: {slug}})),
    fallback: true,
  }
}