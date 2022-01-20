import React, { useEffect, useState } from 'react';

export default function Fruity() {

    const [fruity, setFruity] = useState([])

    useEffect(() => {
        getData();
    }, []);

    async function getData() {
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
        <div>
            <p>ListFruity</p>
        </div>
    )
}
