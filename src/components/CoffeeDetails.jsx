import React from 'react';
import { useLoaderData } from 'react-router';

const CoffeeDetails = () => {
    const coffee = useLoaderData()
    console.log(coffee)
    return (
        <div>
            Coffee Details
            <p>{coffee.name}</p>
            <img src={coffee.photo} alt="" />
            <p>{coffee.price}</p>
        </div>
    );
};

export default CoffeeDetails;