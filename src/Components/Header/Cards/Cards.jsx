import React, { useEffect, useState } from 'react';
import Card from './Card'
import { getDataFromLS } from '../../../LocalStorage/localStorage';

const Cards = ({handleClick,bookmarks,setBookmarks,handleTime}) => {
    const [values,setValues] = useState([])
    useEffect(()=>{
        fetch('../../../../public/Data.json')
        .then(res=>res.json())
        .then(data=>setValues(data))
    },[])

    useEffect(()=>{
        const data = getDataFromLS()
        const empty = []
        for(const id of data){
            const filterData = values.find(idx=>idx.unique_id === id)
            empty.push(filterData)
        }
        setBookmarks(empty)
    },[values])
    return (
        <div>
           <div>
            {
                values.map(value=><Card key={value.unique_id} value={value} handleClick={handleClick} handleTime={handleTime}></Card>)
            }
           </div>
        </div>
    );
};

export default Cards;