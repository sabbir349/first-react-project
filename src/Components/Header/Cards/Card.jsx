import React from 'react';
import { FaBookmark } from "react-icons/fa";

const Card = ({value,handleClick,handleTime}) => {
    const {coverImg,author_img,author_name,date,reading_time,headline,hash_tags,unique_id} = value

    return (
        <div className='m-10 mb-5'>
            <img className='h-[300px] w-full rounded-xl' src={coverImg} alt="" />
        <div className='flex items-center justify-between mx-3'>
            <div className='mt-4 flex items-center gap-2'>
                <img src={author_img} alt="" />
                <div>
                    <p>{author_name}</p>
                    <p>{date}</p>
                </div>
            </div>
            <div className='flex items-center gap-2'>
              <FaBookmark onClick={()=>handleClick(value)} className='text-2xl text-red-600' />
              <p>{reading_time}</p>
            </div>
        </div>
        <div>
            <p className='ml-3 my-3 font-bold text-2xl'>{headline}</p>
        </div>
        <div className='flex gap-5 ml-3'>
            {
                hash_tags.map((hash,index)=><div key={index}>
                    <p>{hash}</p>
                </div>)
            }
        </div>
        <p onClick={()=>handleTime(reading_time)} className='text-xl font-semi-bold ml-3 mt-2 cursor-pointer'>Mark As Read</p>
        </div>
    );
};

export default Card;