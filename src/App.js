import React from "react"
import Header from "./components/Header"
import Nav from "./components/Nav"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Fruity from './pages/Fruity';
import Carrinho from './pages/Carrinho';

export default function App() {
    return (
        <BrowserRouter>
            <div>
                <div>
                    <Header />
                    <Nav />
                </div>
                <main>
                    <div>
                        <Routes>
                            <Route exact path="/" element={<Home />} />
                            <Route path="/fruity" element={<Fruity />} />
                            <Route path="/carrinho" element={<Carrinho />} />
                        </Routes>
                    </div>
                </main>
                <footer></footer>
            </div>
        </BrowserRouter>
    )
}
