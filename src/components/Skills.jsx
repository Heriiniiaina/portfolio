import React from 'react'
import photo from "../assets/pdp.jpeg"
import {FaGithub,FaFacebook, FaGit, FaReact, FaHtml5, FaCss3, FaJs, FaNodeJs} from 'react-icons/fa6'
import { DiMongodb,DiExtjs } from 'react-icons/di'
import { SiExpress, SiInsomnia, SiPostman } from 'react-icons/si'
export default function Skills() {
    const About = {
        firstName:"Heriniaina",
        lastName:"Ramamonjitiana",
        role:"Fullstack Web Developer "
    }
  return (
    <section id='skills' className='min-h-screen flex md:flex-row flex-col-reverse px-10 py-10 items-center justify-center gap-y-10 gap-x-14'>
        <div className='flex flex-col gap-y-4'>
            <h4 className='text-4xl'>My Skills</h4>
            <div className='flex flex-wrap gap-x-6 gap-y-4'>
              <div className="front md:w-5/12 border-solid border-2 border-cyan-600 p-3 flex flex-col gap-y-4">
                  <h4 className='text-xl'>Frontend</h4>
                  <div className='flex items-center gap-x-4'>
                    <div className='flex items-center gap-x-1'>
                        <FaHtml5/>
                        <span>HTML</span>
                    </div>
                    <div className='flex items-center gap-x-1'>
                        <FaCss3/>
                        <span>CSS</span>
                    </div>
                    <div className='flex items-center gap-x-1'>
                        <FaJs/>
                        <span>JavaScript</span>
                    </div>
                    <div className='flex items-center gap-x-1'>
                        <FaReact/>
                        <span>ReactJs</span>
                    </div>
                  </div>
                
                  
              </div>
              <div className="backend md:w-5/12 sm:w-full border-solid border-2 border-cyan-600 p-3 flex flex-col gap-y-4">
                  <h4 className='text-xl'>Backend</h4>
                  <div className='flex items-center gap-x-4'>
                    <div className='flex items-center gap-x-1'>
                        <FaNodeJs/>
                        <span>NodeJs</span>
                    </div>
                    <div className='flex items-center gap-x-1'>
                        <SiExpress/>
                        <span>ExpressJs</span>
                    </div>
                    <div className='flex items-center gap-x-1'>
                        <DiMongodb/>
                        <span>MongoDb</span>
                    </div>
                    
                  </div>
                
                  
              </div>
              <div className="other md:w-5/12 border-solid border-2 border-cyan-600 p-3 flex flex-col gap-y-4">
                  <h4 className='text-xl'>Other</h4>
                  <div className='flex items-center gap-x-4'>
                    <div className='flex items-center gap-x-1'>
                        <FaGithub/>
                        <span>GitHub</span>
                    </div>
                    <div className='flex items-center gap-x-1'>
                        <SiPostman/>
                        <span>Postman</span>
                    </div>
                    <div className='flex items-center gap-x-1'>
                        <SiInsomnia/>
                        <span>Insomnia</span>
                    </div>
                   
                  </div>
                
                  
              </div>
            </div>
          
        </div>
    </section>
  )
}
