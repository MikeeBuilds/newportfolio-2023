import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {}

    export default function Header({}: Props) {
        return (
            <header>
                <h1>
                    <div>
                        {/* Social Icons */}
                        <SocialIcon url="https://www.youtube.com/channel/UC4euJsl4HCjh4TGdiX8hRqA" />
                    </div>
                </h1>
            </header>
        )
    }