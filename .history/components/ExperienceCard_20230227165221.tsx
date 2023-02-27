/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { motion } from 'framer-motion'

interface Props {
    
}

function ExperienceCard({}: Props) {
    return (
        <article>
            <motion.img
                initial={{ 
                    opacity: 0,
                    y:-100, 
                }}
                transition
            className='h-32 w-32 xl:w-[200px] xl:h-[200px] rounded-full object-cover
                        object-top'
                src="https://avatars.githubusercontent.com/u/106281787?s=400&u=051bcd1fe59f00e92c63f6f6a08cfc6c45ced744&v=4" 
                alt="" />
        </article>
    )
}

export default ExperienceCard
