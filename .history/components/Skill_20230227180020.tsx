import React from 'react'
import { motion } from 'framer-motion'

interface Props {
    directionLeft?: | boolean;
    
}

function Skill({ directionLeft }: Props) {
    return (
        <div className='group relativeflex cursor-pointer'>
            <motion.img
            initial={{
                x: directionLeft ? -200 : 200,
                opacity: 0
            }}
            transition={{ duration: 1.5 }}
            whileInView={{ opacity: 1, x: 0 }}
            src='https://www.pngfind.com/pngs/m/472-4724730_metamask-red-fox-hd-png-download.png'
            />
        </div>
    )
}

export default Skill
