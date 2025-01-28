import React from 'react';

const Bookmark = ({bookmark,handleDelete}) => {
    return (
        <div className='mt-10 m-2 bg-gray-300'>
            <div className='flex p-5 items-center gap-3'>
            <p className='font-bold'>{bookmark?.headline}</p>
            <div>
            <img className='h-20 w-32 rounded-xl' src={bookmark?.coverImg} alt="" /> 
            <p className='text-center mt-2'>{bookmark?.reading_time}</p>
            </div>
            </div>
            <div className='text-center'>
            <button className='btn btn-accent mb-3' onClick={()=>handleDelete(bookmark?.unique_id)}>Remove</button>
            </div>
        </div>
    );
};

export default Bookmark;
