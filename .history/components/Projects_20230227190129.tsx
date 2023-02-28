/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import React from 'react'

interface Props {
    
}

function Projects({}: Props) {
    const projects = [1, 2, 3, 4, 5];
    return (
        <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly
        mx-auto items-center z-0'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Projects
            </h3>

            <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory
                z-20'>
                    {projects.map((project) => (
                        <div><img 
                        src="https://images.unsplash.com/photo-1617722537193-5e1b1e1b2b1c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
                        alt="" 
                        />
                        </div>
                    ))}
            </div>

            <div className='w-full absolute top-[30%] bg-[#00abfa]/10 left-0 h-[500px] -skew-y-12' />
        </div>
    )
}

export default Projects
