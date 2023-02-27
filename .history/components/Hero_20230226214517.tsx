import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';

type Props = {}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hello, The name is Mike", 
            "A-Guy-Who-Loves-Coffee.tsx", 
            "<ButLovesToBuildEvenMore />",
        ],
        loop: true,
        delaySpeed: 2000,
});
    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center
                        text-center overflow-hidden'>
            <BackgroundCircles />
            <img src=" />"
            <h1>
            <span>{text}</span>
            <Cursor cursorColor='#FFA500' />
            </h1>
        </div>
    )
}
