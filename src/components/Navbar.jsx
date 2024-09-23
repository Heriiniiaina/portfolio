import React,{useState,useEffect} from 'react'
import {FaBars} from "react-icons/fa6"
export default function Navbar() {
    const [sticky,setSticky] = useState(false)
    const [open,setOpen] = useState(false)
    const menuLink = [
        {
            name:"Home",
            link:"#home"
        },
        {
            name:"About",
            link:"#about"
        },
        {
            name:"Skills",
            link:"#skills"
        },
        {
            name:"Project",
            link:"#project"
        },
    ]
    
  return (
    <>
        <nav className={`fixed w-full top-0 left-0 z-[999] ${sticky ? "bg-white/60 text-gray-900":"text-white"}`}>
            <div className="flex items-center justify-between">
                <div className='mx-7'>
                    <h4 className='text-4xl uppercase font-bold'>
                        <span className='text-cyan-600'>Heriniaina</span>
                    </h4>
                </div>
                <div className={`${sticky ? "bg-white":"bg-white"} text-gray-900 md:block hidden px-7 py-2 font-medium rounded-bl-full`}>
                <ul className="flex items-center gap-1 py-2 text-lg">
                    {menuLink?.map((menu,i)=>(
                        <li key={i} className="px-6 hover:text-cyan-600">
                            <a href={menu?.link}>{menu?.name}</a>
                        </li>
                    ))}
                </ul>
                </div>
                <div onClick={e=>setOpen(!open)} className={`z-[999] ${open ? "text-gray-900":"text-gray-100"} md:hidden text-3xl m-5`}>
                    <FaBars/>
                </div>
                <div className={`md:hidden text-gray-900 absolute w-1/3 h-screen px-7 py-2 font-medium bg-white top-0 duration-300 ${open ? "right-0":"right-[-100%]"} rounded-bl-full`}>
                <ul className="flex flex-col justify-center h-full gap-10 py-2 text-lg">
                    {menuLink?.map((menu,i)=>(
                        <li key={i} className="px-6 hover:text-cyan-600">
                            <a href={menu?.link}>{menu?.name}</a>
                        </li>
                    ))}
                </ul>
                </div>
            </div>
        </nav>
    </>
  )
}
