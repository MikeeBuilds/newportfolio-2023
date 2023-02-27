import React, { ReactElement } from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

type Props = {}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hello, The name is Mike", 
            "Guy-Who-Loves-Coffee.tsx", 
            "<ButLovesToBuildEvenMore />",
        ],
        loop: true,
        delaySpeed: 2000,
});
    return (
        <div>
            <p>{text}</p>
            <Cursor />
        </div>
    )
}
