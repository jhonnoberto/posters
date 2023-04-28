import React from "react";
import './header.scss'
import {BsTelephone} from "react-icons/bs"
import {AiOutlineMail, AiFillHeart} from "react-icons/ai"

function Header() {
    const messages = [
        "a gift lasts forever in your heart", 
        "a poster speaks more than a thousand words",
        "with posters you transmit feelings without words",
        "Gavi tiene la 6",
        "Messi es mejor que Cristiano",
        "Omar es mi hijo en fifa"
    ]

    function renderRandomMessage() {
        const randomNumber = Math.floor(Math.random() * messages.length);
        return messages[randomNumber];
    }

    return (
        <header>
            <div className="headerContainer">
                <div className="headerLeft">
                    <div>
                        <BsTelephone />
                        <span>
                            +54 9 11 3480 9878
                        </span>
                    </div>
                    <div>
                        <AiOutlineMail />
                        <span>
                            hello@example.com
                        </span>
                    </div>
                </div>
                <div className="headerMid">
                    <span>
                        20% coupon 
                    </span>
                    <span className="coupon">
                        20off
                    </span>
                </div>
                <div className="headerRight">
                    <p>
                        {renderRandomMessage()}
                    </p>
                </div>
            </div>
        </header>
    )
} 

export default Header