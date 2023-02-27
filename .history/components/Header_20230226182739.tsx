import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {}

    export default function Header({}: Props) {
        return (
            <header>
                <h1>
                    <div>
                        {/* Social Icons */}
                        <SocialIcon url="https://www.linkedin.com/in/mike-lee-7b5b1b1b3/" />
                    </div>
                </h1>
            </header>
        )
    }