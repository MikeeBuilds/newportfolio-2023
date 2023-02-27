/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';

type Props = {}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hello, The name is Mike", 
            "A-Guy-Who-Loves-Coffee.tsx", 
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
                <div>

                </div>
                <h2 className="tracking-widest text-sm uppercase pb-2 text-gray-500 ">Software engineer</h2>
            <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
            <span className='mr-3'>{text}</span>
            <Cursor cursorColor='#FFA500' />
            </h1>
            <div className='pt-5'>
                <Link
                <button className="heroButton">About</button>
                <button className="heroButton">Experience</button> 
                <button className="heroButton">Skills</button>
                <button className="heroButton">Projects</button>
            </div>
        </div>
    )
}
