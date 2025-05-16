import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const { _id, name, quantity, supplier, taste, price, photo, details } = useLoaderData()

    const handleClick = (e) => {
        e.preventDefault()

        const form = e.target;
        const formData = new FormData(form)
        const updatedCoffee = Object.fromEntries(formData.entries())
        console.log(updatedCoffee)


        fetch(`http://localhost:3000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {

                if (data.modifiedCount) {
                    console.log(data)
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    return (
        <div>
            <div className='p-4 m2-4 text-center'>
                Update coffee
            </div>

            <form onSubmit={handleClick} className='max-w-4xl mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <fieldset className="p-4">
                        <input name='name' defaultValue={name} type="text" className="input" placeholder="Name" />
                    </fieldset>

                    <fieldset className="p-4">
                        <input name='quantity' defaultValue={quantity} type="text" className="input" placeholder="Quantity" />
                    </fieldset>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <fieldset className="p-4">
                        <input name='supplier' defaultValue={supplier} type="text" className="input" placeholder="Supplier" />
                    </fieldset>

                    <fieldset className="p-4">
                        <input name='taste' defaultValue={taste} type="text" className="input" placeholder="Taste" />
                    </fieldset>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <fieldset className="p-4">
                        <input name='price' defaultValue={price} type="text" className="input" placeholder="Price" />
                    </fieldset>

                    <fieldset className="p-4">
                        <input name='details' defaultValue={details} type="text" className="input" placeholder="Details" />
                    </fieldset>
                </div>

                <fieldset className="p-4">
                    <input name='photo' defaultValue={photo} type="text" className="input w-full" placeholder="Photo URL" />
                </fieldset>

                <button type='submit' className='btn btn-outline w-full'>Update</button>
            </form>
        </div>
    );
};

export default UpdateCoffee;