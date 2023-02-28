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
                    {projects.map((project, i) => (
                        <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
                            <img 
                        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" 
                        alt="" 
                        />

                        <div className='space-y-10 px-0 md:px-10 max-w-6xl '>
                            <h4 className='text-4xl font-semibold text-center'>
                                <span className='underline decoration-[#2fcef6]'>Case Study {i + 1} of {projects.length}:</span> UPS clone
                            </h4>

                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

</p>
                        </div>
                        </div>
                    ))}
            </div>

            <div className='w-full absolute top-[30%] bg-[#00abfa]/10 left-0 h-[500px] -skew-y-12' />
        </div>
    )
}

export default Projects
