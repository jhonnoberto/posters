import React from "react"
import './footer.scss'
import {AiOutlineMail} from "react-icons/ai"
import {BsTelephone} from "react-icons/bs"
import {MdOutlinePlace} from "react-icons/md"
import { METHODS } from "http"


function Footer() {
    return (
        <div className="footer">
            <div className="figureLeft">
                <img src={"/images/footerFigureLeft.png"} alt="" />
            </div>
            
            <div className="figureRight">
                <img src={"/images/footerFigureRight.png"} alt="" />
            </div>

            <div className="container">
                <div className="options">
                    <div>
                        <AiOutlineMail />
                        <a href="#">contacto@gmail.com</a>
                    </div>

                    <div>
                        <BsTelephone />
                        <a href="#">+54 9 11 3480 9878</a>
                    </div>

                    <div>
                        <MdOutlinePlace />
                        <a href="#">Buenos Aires, Argnetina</a>
                    </div>
                </div>

                <div className="options">
                    <a href="#">facebook</a>
                    <a href="#">instagram</a>
                    <a href="#">pinterest</a>
                </div>

                <div className="options">
                    <a href="#">editar ahora</a>
                    <a href="#">faq</a>
                    <a href="#">shop</a>
                </div>

                <div className="options">
                    <a href="#">termino y condiciones</a>
                    <a href="#">legal</a>
                    <img src={"images/methods.png"} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Footer