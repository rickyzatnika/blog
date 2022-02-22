import React from 'react';
import moment from 'moment';
import Image from 'next/image';


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



  return (
    <div className="mb-8 rounded-lg bg-white p-4 pb-2 shadow-lg mt-8">
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
      <div className="px-4 lg:px-0">
        <div className="mb-8 flex w-full items-center">
          <div ref={lazyroot} className=" mr-8 flex items-center w-auto">
            <Image
              lazyRoot={lazyRoot}
              alt={post.author.name}
              height={18}
              width={18}
              src={post.author.photo.url}
            
            />
            <p className="text-xs ml-1 inline align-middle text-gray-700">
              {post.author.name}
            </p>
          </div>
          <div className=" font-medium text-gray-700 px-2 items-center flex align-middle gap-2 justify-center">
            
              <Image

                width={28}
                height={28}
                src="https://img.icons8.com/color/48/000000/calendar-16.png"
              
              />
              <span className="text-sm text-neutral-700 flex flex-row w-full justify-center items-center">
                {moment(post.createdAt).format('MMM DD')}
              </span>
            
          </div>
        </div>
        <h1 className="mb-8 text-3xl font-semibold ">{post.title}</h1>
        
       <article className='text-gray-500 p-0 m-0'>
        {post.content.raw.children.map((typeObj, index) => {
            const children = typeObj.children.map((item, itemIndex) => getContentFragment(itemIndex, item.text, item))
            
            return getContentFragment(index, children, typeObj, typeObj.type);
          })}
       </article>
      </div>
    </div>
  )
}

export default PostDetail