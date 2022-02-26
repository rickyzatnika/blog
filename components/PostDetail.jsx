import React from 'react';
import moment from 'moment';
import Image from 'next/image';
import { motion } from 'framer-motion';


const PostDetail = ({ post }) => {

  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = (<b key={index}>{text}</b>);
      }

      if (obj.italic) {
        modifiedText = (<em key={index}>{text}</em>);
      }

      if (obj.underline) {
        modifiedText = (<u key={index}>{text}</u>);
      }
     
    }

    switch (type) {
      case 'heading-three':
        return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
      case 'paragraph':
        return <p key={index} className="mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
      case 'heading-four':
        return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
      case 'image':
        return (
        
            <Image
              key={index}
              alt={obj.title}
              height={obj.height}
              width={obj.width}
              src={obj.src}
            
            />
   
        );
      default:
        return modifiedText;
    }
  };

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
    <motion.div exit={{opacity: 0}} inital='initial' animate='animate'>
      <motion.div variants={fadeInUp} className="mb-8 rounded-lg bg-white p-0 md:p-4 pb-2 shadow-lg mt-8">
        <div className="relative mb-3 overflow-hidden shadow-md ">
          <Image
          
            src={post.featuredImage.url}
            alt={post.title}
            width={1200}
            height={850}
            layout='responsive'
            objectFit='cover'
          />
        </div>
        <div className="px-0 md:px-4 ">
          <div className="mb-8 flex w-full items-center">
            <div className=" mr-8 flex items-center w-auto">
              <Image
              
                alt={post.author.name}
                height={18}
                width={18}
                src={post.author.photo.url}
              
              />
              <p className="text-xs ml-1 inline align-middle text-gray-700">
                {post.author.name}
              </p>
            </div>
            <div className=" font-medium text-gray-700 px-0 md:px-2 items-center flex align-middle gap-2 justify-center">
              
                <Image

                  width={28}
                  height={28}
                  src="https://img.icons8.com/color/48/000000/calendar-16.png"
                  alt='calendar icon'
                
                />
                <span className="text-sm text-neutral-700 flex flex-row w-full justify-center items-center">
                  {moment(post.createdAt).format('MMM DD, YYYY')}
                </span>
              
            </div>
          </div>
          <h1 className="mb-8 text-3xl font-semibold ">{post.title}</h1>
          
        <article className='text-neutral-700 p-2 m-0'>
          {post.content.raw.children.map((typeObj, index) => {
              const children = typeObj.children.map((item, itemIndex) => getContentFragment(itemIndex, item.text, item))
              
              return getContentFragment(index, children, typeObj, typeObj.type);
            })}
        </article>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default PostDetail
