import React from 'react'
import { motion } from 'framer-motion'

interface Props {
    
}

function Skills({}: Props) {
    return (
        <motion.div className='flex relative flex-col text-center md:text-left 
        xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center space-y-0 mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-widest text-gray-500 text-2xl animate-pulse'>
                Skills
                </h3>

                <h3 className='top-36 uppercase tracking-'>
                    Hover over a skill for current proficiency
                </h3>
        </motion.div>
    )
}

export default Skills
