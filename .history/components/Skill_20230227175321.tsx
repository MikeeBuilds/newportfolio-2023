import React from 'react'
import { motion } from 'framer-motion'

interface Props {
    direction?: 'left' | 'right';
    
}

function Skill({}: Props) {
    return (
        <div className='group relativeflex cursor-pointer'>
            <motion.img />
        </div>
    )
}

export default Skill
