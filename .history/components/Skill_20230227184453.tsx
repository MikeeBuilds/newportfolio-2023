import React from 'react'
import { motion } from 'framer-motion'

interface Props {
    directionLeft?: | boolean;
    
}

function Skill({ directionLeft }: Props) {
    return (
        <div className='group relative flex cursor-pointer'>
            <motion.img
            initial={{
                x: directionLeft ? -200 : 200,
                opacity: 0,
            }}
            transition={{ duration: 1.5 }}
            whileInView={{ opacity: 1, x: 0 }}
            src='https://i0.wp.com/metaschool.so/articles/wp-content/uploads/2022/11/metamaskfox.png?w=555&ssl=1'
            className='rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-36 xl:h-36
                        filter group-hover:grayscale transition duration-300 ease-in-out'
            />
            <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out
                group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:h-32 rounded-full z-0'>


                <div className='flex items-center justify-center h-full'>
                    <p className='text-3xl font-bold text-black'>100%</p>
                </div>
            </div>
        </div>
    );55
}

export default Skill;
