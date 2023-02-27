import React from 'react'
import { motion } from 'framer-motion'

interface Props {
    
}

function About({}: Props){
    return (
        <div
        className='flex flex-col relative h-screen text-center
                    md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
                    <h3 className='absolute top-24 uppercase tracking-widest text-gray-500 text-2xl'>About
                    </h3>

            <motion.img src="https://www.facebook.com/photo/?fbid=1643247429285035&set=a.1386817458261368&__tn__=%3C"
            
            />
        </div>
    )
}

export default About




