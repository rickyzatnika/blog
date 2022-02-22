import React, { useRef, useState, useEffect } from 'react';
import { submitComment } from '../services';

const CommentsForm = ({ slug }) => {

  const [error, setError] = useState(false);
  const [localStorage, setlocalStorage] = useState(null);
  const [showSuccesMessage, setShowSuccesMessage] = useState(false);
  const commentEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();
  const storeDataEl = useRef();

  useEffect(() => {
      nameEl.current.value = window.localStorage.getItem('name');
      emailEl.current.value = window.localStorage.getItem('email');
  }, [])

  const handleComments = () => {
    
    setError(false);

    const { value: comment } = commentEl.current;
    const { value: name} = nameEl.current;
    const { value: email } = emailEl.current;
    const { checked: storeData } = storeDataEl.current;

    if(!comment || !name || !email) {
      setError(true);
      return;
    }
    const commentObj = { name, email, comment, slug };
    if(storeData) {
      window.localStorage.setItem( 'name', name);
      window.localStorage.setItem( 'email', email);
    } else {
      window.localStorage.removeItem('name', name);
      window.localStorage.removeItem('email', email);
    }

    submitComment(commentObj)
    .then((res) => {
      setShowSuccesMessage(true);

      setTimeout(() => {
        setShowSuccesMessage(false);
      }, 3000);
    })
  }


  return (
    <div className='bg-white shadow-lg rounded-lg p-8 pb-12 mb-8'>
        <h3 className='text-xl mb-8 font-semibold border-b pb-4 text-gray-700'>Leave a Comment ..</h3>
        <div className="grid grid-cols-1 gap-4 mb-4">
            <textarea ref={commentEl} 
              className="p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-200 text-gray-700"
              placeholder='Komentar'
              name='comment'
            />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
            <input 
              type="text" 
              ref={nameEl}
              className="p-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-200 text-gray-700"
              placeholder='Nama'
              name='name'
            />
            <input 
              type="text" 
              ref={emailEl}
              className="p-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-200 text-gray-700"
              placeholder='Email'
              name='email'
            />
        </div>
        <div className="grid grid-cols-1 gap-4 mb-4">
            <div className='inline items-center'>
              <input ref={storeDataEl} type="checkbox" id='storeData' name='storeData' value='true' />
              <label htmlFor='storeData' className='text-sm ml-2 text-gray-500 cursor-pointer'>Ingat saya</label>
            </div>
        </div>
        {error && <p className='text-xs text-red-500'>Hey kamu ! iyaahh kamu, isi yang bener atuh ..</p>}
        <div className="mt-8 ">
          <button type='button' onClick={handleComments}
            className="text-gray-700 transition duration-500 ease hover:bg-teal-700 inline-block bg-teal-500 text-lg rounded-full px-8 py-1 cursor-pointer "
          >Kirim</button>
          {showSuccesMessage && <span className='text-xl float-right mt-3 text-green-500 font-semibold'>Comment submitted for review</span>}
        </div>
    </div>
  )
}

export default CommentsForm