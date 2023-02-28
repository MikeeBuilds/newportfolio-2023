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
            src='https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2023/01/metamask-logo-on-plain-background.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5'
            />
        </div>
    )
}

export default Skill
