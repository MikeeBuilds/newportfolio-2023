import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {}

    export default function Header({}: Props) {
        return (
            <header>
                <h1>
                    <div className="flex flex-row items-center">
                        {/* Social Icons */}
                        <SocialIcon url="https://twitter.com/bankroll_miyagi" 
                                    fgColor="gray"
                                    bgColor="transparent"
                                    />

<SocialIcon url="https://twitter.com/bankroll_miyagi" 
                                    fgColor="gray"
                                    bgColor="transparent"
                                    />

<SocialIcon url="https://twitter.com/bankroll_miyagi" 
                                    fgColor="gray"
                                    bgColor="transparent"
                                    />

<SocialIcon url="https://twitter.com/bankroll_miyagi" 
                                    fgColor="gray"
                                    bgColor="transparent"
                                    />
                    </div>

                    <div>
                        <SocialIcon 
                        className="cursor-pointer"
                        network="email"
                        fgColor="gray"
                        bgColor="transparent"
                        />
                        <p>Get in touch!</p>
                    </div>
                </h1>
            </header>
        )
    }