import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getTotalPrice } from '../../utilities/fakedb';
import Cosmetic from '../Cosmetic/Cosmetic';


const Cosmetics = () => {

    const [cosmetics, setCosmetics] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCosmetics(data))
    }, [])

    const total = getTotalPrice(cosmetics)

    return (
        <div>
            <h1>Welcome to my Cosmetics Store</h1>
            <p>TotalAmount: {total}</p>

            {
                cosmetics.map(cosmetic => <Cosmetic
                    key={cosmetic.id}
                    cosmetic={cosmetic}
                ></Cosmetic>)
            }
        </div>


    );
};

export default Cosmetics;