import React from 'react';
import moment from 'moment';


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
          <img
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
    <div className="mb-8 rounded-lg bg-white p-4 pb-2 shadow-lg">
      <div className="relative mb-6 overflow-hidden shadow-md">
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="h-full w-full rounded-t-lg object-top"
          width='1200px'
          height='1200px'
        
        />
      </div>
      <div className="px-4 lg:px-0">
        <div className="mb-8 flex w-full items-center">
          <div className="mb-4 mr-8 flex w-full items-center  lg:mb-0 lg:w-auto">
            <img
              alt={post.author.name}
              height="28px"
              width="28px"
              className="rounded-full align-middle"
              src={post.author.photo.url}
            
            />
            <p className="text-md ml-2 inline align-middle text-gray-700">
              {post.author.name}
            </p>
          </div>
          <div className=" font-medium text-gray-700 px-2">
            <div className="flex items-center  flex-wrap gap-1 align-middle w-full">
              <img
                className="calendar"
                width='28px'
                height='28px'
                src="https://img.icons8.com/color/48/000000/calendar-16.png"
              
              />
              <span className="text-sm text-gray-700">
                {moment(post.createdAt).format('MMM DD, YYYY')}
              </span>
            </div>
          </div>
        </div>
        <h1 className="mb-8 text-3xl font-semibold ">{post.title}</h1>
        
       <article className='text-gray-500'>
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
