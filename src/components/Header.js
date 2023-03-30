import React from "react"
import { Link } from "react-router-dom"
import "../styles/Header.css"

export default function Header() {
    return (
        <header>
            <nav id="navHeader">
                <ul id="listLinks">
                    <li>
                        <Link to="/" id="logo"><h1>Hortifruti</h1></Link>
                    </li>
                    <li>
                        <Link to="/fruity" className="linkAdjacente">Catálogo de Frutas</Link>
                        <Link to="/carrinho" className="linkAdjacente">Carrinho</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}