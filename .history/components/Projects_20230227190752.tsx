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
                        <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
                            <img 
                        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" 
                        alt="" 
                        />

                        <div>
                            <h4>Case Study {i + 1 } of {projects.length}: UPS clone</h4>
                        </div>
                        </div>
                    ))}
            </div>

            <div className='w-full absolute top-[30%] bg-[#00abfa]/10 left-0 h-[500px] -skew-y-12' />
        </div>
    )
}

export default Projects
