import React from "react";
import './navbar.scss'
import {BsCartPlus} from "react-icons/bs"
import {AiOutlineHeart} from "react-icons/ai"
import {BiUserCircle} from "react-icons/bi"


function Navbar() {
    return(
        <div className="navbar">
            <div className="navbarContainer">
                <div className="navbarleft">
                    <ul>
                        <li>
                            <a href="#">contact</a>
                        </li>
                        <li>
                            <a href="#">products</a>
                        </li>
                        <li>
                            <a href="#">about us</a>
                        </li>
                    </ul>
                </div>

                <div className="navbarMid">
                    <h1>
                        posters
                    </h1>
                </div>

                <div className="navbarRight">
                    <ul>
                        <li>
                            <a href="#"><AiOutlineHeart color="#4d4c4c"/></a>
                        </li>
                        <li>
                            <a href="#"><BsCartPlus color="#4d4c4c"/></a>
                        </li>
                        <li>
                            <a href="#">< BiUserCircle color="#4d4c4c"/></a>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar