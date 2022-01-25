import React, { useEffect, useState } from 'react';
import "../../styles/ListFruity.css"

export default function Fruity() {

    const [fruity, setFruity] = useState([])

    useEffect(() => {
        getFruity();
    }, []);

    const getFruity = async () => {
        await fetch("http://localhost:8000/api/fruit/all")
            .then(function (response) {
                response.json().then(function (data) {
                    setFruity(data)
                })
            })
            .catch(err => {
                console.error(err);
            });
    }

    return (
        <div id='conteiner'>
            {fruity.map((item, index) => {
                return (
                    <button className='fruity-button'>
                        <article key={index.toString()} className='fruity-article'>
                            <h2 key={index.toString()}>{item.name}</h2>
                        </article>
                    </button>
                )
            })}
        </div>
    )
}
