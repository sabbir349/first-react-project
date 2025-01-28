const getDataFromLS=()=>{
    const storedData= localStorage.getItem("bookmarks")
    if(storedData){
        return JSON.parse(storedData)
    }
    return []
}
 
const setDataToLS=(id)=>{
    const data = getDataFromLS()
    data.push(id)
    localStorage.setItem('bookmarks',JSON.stringify(data))
}

const removeDataFromLS=(id)=>{
    const data =getDataFromLS()
    const filterData = data.filter(idx=>idx !== id)
    localStorage.setItem('bookmarks',JSON.stringify(filterData))
}

export{
    getDataFromLS,
    setDataToLS,
    removeDataFromLS
}