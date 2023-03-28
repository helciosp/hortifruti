import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import './Style.css'

export default function Fruit() {

    const [fruit, setFruit] = useState({});
    const [quantidade, setQuantidade] = useState(0);
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id")

    const getFruit = async () => {
        await fetch(`/api/fruit/${id}`)
            .then(function (response) {
                response.json().then(function (data) {
                    setFruit(data);
                })
            })
            .catch(err => {
                console.error(err);
            });
    }

    useEffect(() => {
        getFruit();
    });

    const mudarQuantidade = (operador) => {
        let newQuantidade = quantidade;
        switch (operador) {
            case '+':
                newQuantidade += 1;
                setQuantidade(newQuantidade);
                break;
            case '-':
                if(quantidade > 0) {
                    newQuantidade -= 1
                    setQuantidade(newQuantidade);
                }
                break;
            default:
                setQuantidade(0);
                break;
        }
    }

    return (
        <div>
            <article id='fruit-article'>
                <div>
                    <div>
                        <h2 id='fruit'>{fruit.name}</h2>
                    </div>
                    <div id='conteiner-quantidade'>
                        <button onClick={() => mudarQuantidade('+')} className='button' id='mais'>+</button>
                        <p id='quantidade'>{quantidade}</p>
                        <button onClick={() => mudarQuantidade('-')} className='button' id='menos'>-</button>
                    </div>
                    <div>
                        <button id='button-comprar'>COMPRAR</button>
                    </div>
                </div>
            </article>
        </div>
    )
}
