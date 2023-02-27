import React, { ReactElement } from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

type Props = {}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: ["Guy-Who-Loves-To"],
});
    return (
        <div>
            
        </div>
    )
}
