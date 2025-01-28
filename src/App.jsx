import { useState } from "react"
import Bookmarks from "./Components/Header/Bookmarks/Bookmarks"
import Cards from "./Components/Header/Cards/Cards"
import Header from "./Components/Header/Header"
import { removeDataFromLS, setDataToLS } from "./LocalStorage/localStorage"


function App() {
  
  const[bookmarks,setBookmarks] = useState([])
  const [readingTime,setReadingTime] = useState(0)
  const handleClick=(id)=>{
    const newValue = [...bookmarks,id]
    setBookmarks(newValue)
    setDataToLS(id.unique_id)
  }

  const handleDelete=(id)=>{
    const filterData = bookmarks.filter(idx=>idx.unique_id !== id)
    removeDataFromLS(id)
    setBookmarks(filterData)
}

const handleTime=(id)=>{
  const newValue = id.split(" ")[0]
  const changeReadingTime = parseInt(newValue)
  const finalValue = changeReadingTime + readingTime
  setReadingTime(finalValue)
}
  return (
    <div>
      <Header></Header>
      <div className="mt-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="col-span-2 border-2 border-black">
          <Cards handleClick={handleClick} bookmarks={bookmarks} setBookmarks={setBookmarks} handleTime={handleTime}></Cards>
        </div>
        <div className="border-2 border-black bg-gray-100">
          <Bookmarks readingTime={readingTime} bookmarks={bookmarks} handleDelete={handleDelete}npm></Bookmarks>
        </div>
      </div>
    </div>
  )
}

export default App
