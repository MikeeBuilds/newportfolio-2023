/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';

type Props = {}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hello, The name is Mike", 
            "A-Guy-Who-Loves-The Sunshine.tsx", 
            "<ButLovesToCodeEvenMore />",
        ],
        loop: true,
        delaySpeed: 2000,
});
    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center
                        text-center overflow-hidden'>
            <BackgroundCircles />
            <img 
                className='relative rounded-full h-32 mx-auto object-cover' 
                src="https://media.licdn.com/dms/image/C5622AQFSM5_Oz3VXTg/feedshare-shrink_800/0/1676510303232?e=1680134400&v=beta&t=4pkwPojK3TWozlgH5H9WQ2u2LUc48icI7-hiPWPcpqg" 
                alt=''
                />
                <div className='z-20'>
                <h2 className="tracking-widest text-sm uppercase pb-2 text-gray-500 ">Software engineer</h2>
            <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
            <span className='mr-3'>{text}</span>
            <Cursor cursorColor='#00c8ff' />
            </h1>
            <div className='pt-5'>
                <Link href="#about" >
                <button className="heroButton">About</button>
                </Link>
                <Link href="#experience" >
                <button className="heroButton">Experience</button> 
                </Link>
                <Link href="#skills">
                <button className="heroButton">Skills</button>
                </Link>
                <Link href="#projects">
                <button className="heroButton">Projects</button>
                </Link>
                </div>
            </div>
        </div>
    )
}