import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'

interface Props {
    
}

function Skills({}: Props) {
    return (
        <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        
        className='flex relative flex-col text-center md:text-left 
        xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center space-y-0 mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-widest text-gray-500 text-2xl animate-pulse'>
                Skills
                </h3>

                <h3 className='top-36 uppercase tracking-[6px] absolute'>
                    Hover over a skill for current proficiency
                </h3>

                <div className='grid grid-cols-4 gap-5'> 
                    <Skill />
                    <Skill />
                    <Skill />
                    <Skill />
                    <Skill />
                    <Skill />
                    <Skill />
                    <Skill />
                    <Skill />
                    <Skill />
                    <Skill />
                    <Skill />
                    
                </div>
        </motion.div>
    )
}

export default Skills
