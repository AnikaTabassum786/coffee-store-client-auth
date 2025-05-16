import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import CoffeeCard from './CoffeeCard';

const Home = () => {

    const initialCoffee = useLoaderData()
    const [coffees,setCoffees] = useState(initialCoffee)
    // console.log(coffee)
    
    return (
        <div className='grid grid-cols-2'>
           {
            coffees?.map((coffee)=>{
                return(
                    <CoffeeCard coffee= {coffee} coffees={coffees } setCoffees={setCoffees}>
                   
                    </CoffeeCard>
                )
            })
           }
        </div>
    );
};

export default Home;