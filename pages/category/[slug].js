import React from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion'
import { getCategories, getCategoryPost } from '../../services';
import { PostCard, Categories, Loader } from '../../components';

const CategoryPost = ({ posts }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
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
    <motion.div variants={fadeInUp}
       className="container sm:mx-10 md:mx-auto px-6 md:px-20 mb-8 sm:w-full md:w-full ">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 ">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <Categories />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default CategoryPost;

// Fetch data at build time
export async function getStaticProps({ params }) {
  const posts = await getCategoryPost(params.slug);

  return {
    props: {
       posts 
      }, 
      revalidate: 1,
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const categories = await getCategories();
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
}