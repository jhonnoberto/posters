import React from "react"
import './pickup.scss'


function Pickup() {
    return (
        <div className="pickup">
            <div className="imagen">
                <img src={'/images/poster.svg'} alt="" />
            </div>
            <div className="posters">
                <h1>
                    Pick a style
                </h1>
                <div className="postersOptions">
                    <img src={'/images/image 1.png'} alt="" />
                    <img src={'/images/image 2.png'} alt="" />
                    <img src={'/images/image 3.png'} alt="" />
                </div>
                <p>
                    Click the poster you like and customize it as you wish
                </p>
            </div>
        </div>
    )
}

export default Pickup