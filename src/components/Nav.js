import React from "react"
import { Link } from "react-router-dom"

export default function Nav() {
    return (
        <nav>
            <ul>
                <Link to="/">Home</Link>
                <Link to="/fruity">Fruity</Link>
                <Link to="/carrinho">Carrinho</Link>
            </ul>
        </nav>
    )
}