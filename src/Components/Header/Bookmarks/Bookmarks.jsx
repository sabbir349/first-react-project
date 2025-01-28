import React from 'react';
import Bookmark from './Bookmark';

const Bookmarks = ({bookmarks,handleDelete,readingTime}) => {
    
    return (
        <div>
            <div className='flex justify-between mx-3 items-center'>
            <p className='text-xl text-blue-600 font-bold '>Bookmark</p>
            <p className='text-xl font-semi-bold text-rose-600'>{readingTime}</p>
            </div>
            <div>
                {
                    bookmarks.map((bookmark,index)=><Bookmark key={index} bookmark={bookmark} handleDelete={handleDelete}></Bookmark>)
                }
            </div>
        </div>
    );
};

export default Bookmarks;