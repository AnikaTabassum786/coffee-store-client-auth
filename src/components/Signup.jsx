import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';
import Swal from 'sweetalert2';

const Signup = () => {
  const { createUser } = use(AuthContext)
  console.log(createUser)

  const handleSignUp = (e) => {
    e.preventDefault()

    const form = e.target;
    const formData = new FormData(form)
    const { email, password, ...restFormData } = Object.fromEntries(formData.entries())



    // console.log(email, password, userprofile)

    createUser(email, password)
      .then(result => {
        console.log(result.user)
        // save profile info in the DB

        const userprofile = {
          email,
          ...restFormData,
          creationTime:result.user?.metadata?.creationTime,
          lastSignInTime:result.user?.metadata?.lastSignInTime
        }

        fetch('http://localhost:3000/users', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(userprofile)
        })
          .then(res => res.json())
          .then(data => {
            if (data.insertedId) {
              console.log('after profile save', data)
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
              });
            }

          })

      })
      .catch(error => {
        console.log(error)
      })
  }
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md">
        <form onSubmit={handleSignUp} className="fieldset p-6 border rounded-lg shadow-md">

          <label className="label">Name</label>
          <input type="text" name='name' className="input input-bordered w-full mb-4" placeholder="Name" />

          <label className="label">Address</label>
          <input type="text" name='address' className="input input-bordered w-full mb-4" placeholder="Address" />

          <label className="label">Phone Number</label>
          <input type="text" name='phone' className="input input-bordered w-full mb-4" placeholder="Phone Number" />

          <label className="label">Photo</label>
          <input type="text" name='Photo' className="input input-bordered w-full mb-4" placeholder="Photo URL" />

          <label className="label">Email</label>
          <input type="email" name='email' className="input input-bordered w-full mb-4" placeholder="Email" />

          <label className="label">Password</label>
          <input type="password" name='password' className="input input-bordered w-full mb-2" placeholder="Password" />

          <div><a className="link link-hover text-sm">Forgot password?</a></div>

          <button className="btn btn-neutral mt-4 w-full">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
