import React from 'react'
import photo from "../assets/pdp.jpeg"
import {FaGithub,FaFacebook, FaGit} from 'react-icons/fa6'
export default function About() {
    const donwloadCv = ()=>{
        const link = document.createElement("a")
        link.href ="/CV.pdf"
        link.download = "Heriniaina_Ramamonjitiana.pdf"
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }
    const About = {
        firstName:"Heriniaina",
        lastName:"Ramamonjitiana",
        role:"Fullstack Web Developer "
    }
  return (
   <section id='home' className='min-h-screen flex md:flex-row flex-col-reverse px-10 py-10 items-center justify-center gap-y-10 gap-x-14'>
        <div className=''>
        <div className='flex flex-col items-center gap-y-4'>
                <h3 className='lg:text-4xl md:text-2xl sm:text-2xl'>I am <span className='text-cyan-600'>{About.firstName}</span> {About.lastName} </h3>
                <h4 className='lg:text-3xl md:text-2xl sm:text-2xl'><span className='text-gray-600'>{About.role}</span></h4>
               <a >
               <button onClick={donwloadCv} className='px-2 py-2 rounded bg-cyan-600'>Download my CV</button>
                </a>
            
        </div>
        </div>
        
        <div className=''>
            <img src={photo} alt=""  className='w-60 h-60 rounded-full' />
        </div>
   </section>
  )
}
