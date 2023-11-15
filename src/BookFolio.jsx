import React from 'react'
import { useState, useEffect } from 'react';

function BookFolio() {
    const [theme, setTheme] = useState("");
    const mode = ()=>{
        theme === "darktheme" ? setTheme("lighttheme"):setTheme("darktheme")
    }
    useEffect(() => {
        document.body.className=theme
    }, [theme]);
  return (
    <>
    <div className="container w-[100%] p-5">
        {theme=== "darktheme" ?
        <button onClick={mode}
        className='bg-red-600 text-white w-36 p-4 border-solid border-red-400 rounded-md hover:bg-pink-500 hover:text-blue-600'>
       Light Theme
       </button>
       :
       <button onClick={mode}
     className='bg-red-600 text-white w-36 p-4 border-solid border-red-400 rounded-md hover:bg-pink-500 hover:text-blue-600'>
    Dark Theme
    </button>}
    
    <div className="text-center">
    <h1 className="text-5xl uppercase">
        Bookfolio
    </h1>
    <p className=" mt-5 text-2xl">
        Lorem ipsum dolor sit amet consectetur.
    </p>
    </div>
    <div className="w-full flex justify-evenly py-14">
    <div className="w-80">
        <img src="https://designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg" alt=""  className=''/>
    </div>
    <div className="w-80">
        <img src="https://designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-joc-madeira-spunge.jpg" alt=""  className=''/>
    </div>
    <div className="w-80">
        <img src="https://designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-ll-2-the-last-pages.jpg" alt=""  className=''/>
    </div>
    </div>
    </div>
    </>
  )
}

export default BookFolio



//Ternary Condition
//condition ? output1: output2