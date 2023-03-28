import React from "react"
import Header from "../../components/Header"
import Nav from "../../components/Nav"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Home';
import Fruity from '../Fruity';
import Carrinho from '../Carrinho';
import Fruit from "../Fruit";

export default function App() {
    return (
        <BrowserRouter>
            <div>
                <div>
                    <Header />
                    <Nav />
                </div>
                <main>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/fruity" element={<Fruity />} />
                        <Route path="/carrinho" element={<Carrinho />} />
                        <Route path="/fruity/fruit" element={<Fruit />} />
                    </Routes>
                </main>
                <footer></footer>
            </div>
        </BrowserRouter>
    )
}
