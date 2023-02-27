import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

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
        <div>
            <Background />
            <h1>
            <span>{text}</span>
            <Cursor cursorColor='#FFA500' />
            </h1>
        </div>
    )
}
