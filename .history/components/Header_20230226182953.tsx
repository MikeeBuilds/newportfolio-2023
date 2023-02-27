import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {}

    export default function Header({}: Props) {
        return (
            <header>
                <h1>
                    <div>
                        {/* Social Icons */}
                        <SocialIcon url="https://www.linkedin.com/in/mike-lee-/" />
                    </div>
                </h1>
            </header>
        )
    }