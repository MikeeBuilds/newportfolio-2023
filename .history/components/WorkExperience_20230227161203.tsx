import React from 'react'

interface Props {
    
}

function WorkExperience({}: Props) {
    return (
        <div className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row
                        max-w-full '>
            <h3
            className='absolute top-24 uppercase tracking-widest text-2xl text-gray-500'
            >
            Experience </h3>
        </div>
    )
}

export default WorkExperience;
