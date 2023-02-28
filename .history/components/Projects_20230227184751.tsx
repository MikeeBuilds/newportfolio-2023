import React from 'react'

interface Props {
    
}

function Projects({}: Props) {
    return (
        <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full '>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Projects
            </h3>
        </div>
    )
}

export default Projects
