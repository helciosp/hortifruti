import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "../../components/Header"
import Home from '../Home';
import Fruity from '../Fruity';
import Carrinho from '../Carrinho';
import Fruit from "../Fruit";
import "../../styles/Default.css"

export default function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <div>
                    <Header />
                </div>
                <main>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/fruity" element={<Fruity />} />
                        <Route path="/carrinho" element={<Carrinho />} />
                        <Route path="/fruity/fruit" element={<Fruit />} />
                    </Routes>
                </main>
                <footer>
                    <p>by <a href="https://github.com/helciosp">helciosp</a></p>
                </footer>
            </div>
        </BrowserRouter>
    )
}
