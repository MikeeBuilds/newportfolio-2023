import React from 'react'
import { motion } from 'framer-motion'

interface Props {
    
}

function Skills({}: Props) {
    return (
        <motion.div className='h-screen flex relative flex-col text-center md:text-left first-letter:'>
            <h3 className='absolute top-24 uppercase tracking-widest text-gray-500 text-2xl animate-pulse'>Skills</h3>
        </motion.div>
    )
}

export default Skills
