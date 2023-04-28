import React from "react"
import './memories.scss'

function Memories() {
    return (
        <div className="memories">
            <div className="recuerdos">
                <h1>
                    recuerdos...
                </h1>
            </div>

            <div className="posters">
                <div className="poster">
                    <img src={'images/cuadro.png'} alt="" />
                    <div className="comentario" >
                        <img src={'images/minifoto.png'} alt="" />
                        <h3>
                            Omar Villalobos
                        </h3>
                        <p>
                            This is the best gift  ever!!! I neves been so sastified with a product
                        </p>
                    </div>
                </div>

                <div className="poster">
                    <img src={'images/cuadro 2.png'} alt="" className="imagenMid"/>
                    <div className="comentario comentarioDos">
                        <img src={'images/minifoto.png'} alt="" />
                        <h3>
                            Diego Enrique
                        </h3>
                        <p>
                            WOW!! NO WORDS.
                        </p>
                    </div>
                </div>

                <div className="poster">
                    <img src={'images/cuadro 3.png'} alt="" />
                    <div className="comentario comentarioTres">
                        <img src={'images/minifoto.png'} alt="" />
                        <h3>
                            Mauricio Andres
                        </h3>
                        <p>
                            This is the best gift  ever!!! I neves been so sastified with a product
                        </p>
                    </div>
                </div>
            </div>

            <div className="frase">
                <img src={'images/comillas.png'} alt=""/>
                <h2>
                    La vida no es la que vivimos, si no cómo la recordamos para contarla
                </h2>
                <span>
                    Gabriel Garcia Marquez
                </span>
            </div>
        </div>
    )
}

export default Memories