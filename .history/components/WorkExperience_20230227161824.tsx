import React from 'react'
import { motion } from 'framer-motion'


interface Props {
    
}

function WorkExperience({}: Props) {
    return (
        <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row
                        max-w-full px-10 justify-evenly mx-auto items-center scroll-smooth animate-pulse'>
            <h3
            className='absolute top-24 uppercase tracking-widest text-2xl text-gray-500'
            >
            Experience 
            </h3>

            <div>
                {/* ExperienceCards */}
                {/* ExperienceCards */}
                {/* ExperienceCards */}
            </div>
        </motion.div>
    )
}

export default WorkExperience;
