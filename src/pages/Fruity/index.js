import React, { useEffect, useState } from 'react';
import "./Style.css"
import { Link } from 'react-router-dom';

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
            {fruity.map((item) => {
                return (
                    <Link key={item.id} to={"/fruity/fruit?id=" + item.id}>
                        <button key={item.id} className='fruity-button'>
                            <article key={item.id} className='fruity-article'>
                                <h2 key={item.id}>{item.name}</h2>
                            </article>
                        </button>
                    </Link>
                )
            })}
        </div>
    )
}
