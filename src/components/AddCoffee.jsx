import React from 'react';
import Swal from 'sweetalert2'

const AddCoffee = () => {
    const handleAddCoffee = event =>{
        event.preventDefault()
        const form = event.target;
        const name  = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value
        const details  = form.details.value;
        const photo  = form.photo.value;
        const newCoffee = {name, quantity, supplier, taste, category, details, photo}
        console.log(newCoffee);

        // data send to server
        fetch('http://localhost:5000/coffee',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            Swal.fire({
                title: 'Success!',
                text: 'USer Added Successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
            
        })
        
    }



    return (
        <div className='bg-[#F4F3F0] p-24'>
            <h2 className='text-3xl font-extrabold'>Add a Coffee</h2>
            <form onSubmit={handleAddCoffee}>
                {/* form name & quantity now */}
                <div className='md:flex mb-8'>
                    <div className="form-control md:w-1/2">
                        <label className='label'>
                            <span>Coffee Name</span>
                        </label>
                        <input className="input input-bordered join-item w-full" name='name' placeholder="Coffee Name" />
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className='label'>
                            <span>Available Quantity</span>
                        </label>
                        <input className="input input-bordered join-item w-full" name='quantity' placeholder="Available Quantity" />
                    </div>
                </div>
                {/* form supplier & taste now */}
                <div className='md:flex mb-8'>
                    <div className="form-control md:w-1/2">
                        <label className='label'>
                            <span>Supplier Name</span>
                        </label>
                        <input className="input input-bordered join-item w-full" name='supplier' placeholder="Supplier Name" />
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className='label'>
                            <span>Taste</span>
                        </label>
                        <input className="input input-bordered join-item w-full" name='taste' placeholder="Taste" />
                    </div>
                </div>
                {/* form category and details now */}
                <div className='md:flex mb-8'>
                    <div className="form-control md:w-1/2">
                        <label className='label'>
                            <span>Category</span>
                        </label>
                        <input className="input input-bordered join-item w-full" name='category' placeholder="Category" />
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className='label'>
                            <span>Details</span>
                        </label>
                        <input className="input input-bordered join-item w-full" name='details' placeholder="Details" />
                    </div>
                </div>
                {/* form photo url now */}
                <div className='mb-8'>
                    <div className="form-control md:w-1/2">
                        <label className='label'>
                            <span>Photo URL</span>
                        </label>
                        <input className="input input-bordered join-item w-full" name='photo' placeholder="Photo URL" />
                    </div>
                </div>
                <input type="submit" value="Add Coffee" className='btn btn-block' />
            </form>
        </div>
    );
};

export default AddCoffee;