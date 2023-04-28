import React from "react"
import './template.scss'
import {AiOutlineHeart, AiFillHeart} from "react-icons/ai"

function Templates() {
    const posters = [
        {
            name: "Blue Ocean",
            image: "/images/rectangle.png",
            favorite: false
        },
        {
            name: "Red Sky",
            image: "/images/rectangle.png",
            favorite: true
        },
        {
            name: "Omar's Dream",
            image: "/images/rectangle.png",
            favorite: false
        },
        {
            name: "Sky night",
            image: "/images/rectangle.png",
            favorite: false
        }
    ]

    return (
        <div className="templates">
            <div className="figuresLeft">
                <img src={"/images/figuresleft.png"} alt="" />
            </div>

            <div className="figuresRight">
                <img src={"/images/figuresRight.png"} alt="" />
            </div>

            <div className="container">    
                <div className="title">
                    <h1>
                        or edit one of our templates
                    </h1>
                </div>

                <div className="templates">
                    {posters.map(poster => (
                        <div className="template">
                            <img src={poster.image} alt="" />
                            <div>
                                <h3>
                                    {poster.name}
                                </h3>
                                {poster.favorite === true ? <AiFillHeart size={24} color="red"/> : <AiOutlineHeart size={24}/>} 
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Templates
