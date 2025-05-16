import React from 'react';
import Swal from 'sweetalert2';

const AddCoffee = () => {
    const handleClick = (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const newCoffee = Object.fromEntries(formData.entries())
        console.log(newCoffee)


        // send Coffee data to DB

        fetch('http://localhost:3000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {

                if (data.insertedId) {
                    console.log(data)
                    Swal.fire({
                        title: "Coffee Added Successfully!",
                        // text: "You clicked the button!",
                        icon: "success"
                    });

                    form.reset()
                }

            })



    }
    return (
        <>
            <div className='p-4 m2-4 text-center'>
                Add coffee
            </div>
            <div className='text-center'>
                It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
            </div>

            <form onSubmit={handleClick} className='max-w-4xl mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <fieldset className="p-4">
                        <input name='name' type="text" className="input" placeholder="Name" />
                    </fieldset>

                    <fieldset className="p-4">
                        <input name='quantity' type="text" className="input" placeholder="Quantity" />
                    </fieldset>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <fieldset className="p-4">
                        <input name='supplier' type="text" className="input" placeholder="Supplier" />
                    </fieldset>

                    <fieldset className="p-4">
                        <input name='taste' type="text" className="input" placeholder="Taste" />
                    </fieldset>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <fieldset className="p-4">
                        <input name='price' type="text" className="input" placeholder="Price" />
                    </fieldset>

                    <fieldset className="p-4">
                        <input name='details' type="text" className="input" placeholder="Details" />
                    </fieldset>
                </div>

                <fieldset className="p-4">
                    <input name='photo' type="text" className="input w-full" placeholder="Photo URL" />
                </fieldset>

                <button type='submit' className='btn btn-outline w-full'>Submit</button>
            </form>
        </>
    );
};

export default AddCoffee;