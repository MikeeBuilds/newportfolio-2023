import React from 'react'
import { motion } from 'framer-motion'

interface Props {
    
}

function About({}: Props){
    return (
        <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className='flex flex-col relative h-screen text-center
                    md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
                    <h3 className='absolute top-24 uppercase tracking-widest text-gray-500 text-2xl anim'>About
                    </h3>

            <motion.img 
                initial={{
                    x: -200,
                    opacity: 0,
                }}
                transition={{
                    duration: 1.2,
                }}
                whileInView={{
                    x: 0,
                    opacity: 1,
                }}
            src="https://scontent-dfw5-1.xx.fbcdn.net/v/t1.18169-9/12011250_1643247429285035_8271171011447928253_n.jpg?stp=dst-jpg_s552x414&_nc_cat=110&ccb=1-7&_nc_sid=da31f3&_nc_ohc=iSgHM1NS41gAX8G8kbM&_nc_ht=scontent-dfw5-1.xx&oh=00_AfB4kri1HVTocyl5HQdLmylKZ8uqapZ75foxrvpZSJo61w&oe=6423C17D"
            className='mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg
                        md:w-64 md:h-90 xl:w-[500px] xl:h-[600px] '

            />
            <div className='space-y-10 px-0 md:px-10'>
                <h4 className='text-4xl font-semibold'>Here is a <span className='underline decoration-[#f7ab0a]/50'>little</span> about me
                </h4>
                <p className='text-base text-gray-500'> As a App/Web3 Developer new in the industry, I am a recent graduate with a solid understanding of front-end and
                    back-end web development, as well as experience with blockchain and smart contract development. I am passionate about building scalable, user-friendly applications that meet real-world needs.
My technical skills include proficiency in languages such as JavaScript, HTML, CSS, and Python, as well as experience with front-end frameworks such as React and Angular, and back-end frameworks such as Django and Node.js.
In addition, I have knowledge of blockchain technologies, including the Ethereum platform, Solidity smart contract development, and web3.js library.
                </p>
            </div>
        </motion.div>
    )
}

export default About




