import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';


const Signin = () => {

    const { signInUser } = use(AuthContext)

    const handleSignin = (e) => {
        e.preventDefault()

        const form = e.target;
        const email = form.email.value
        const password = form.password.value

        console.log(email, password)

        //   firebase sign in
        signInUser(email, password)
            .then(result => {
                console.log(result.user)

                const signInInfo={
                    email,
                    lastSignInTime:result.user?.metadata?.lastSignInTime
                }

                return fetch('http://localhost:3000/users',{
                method: 'PATCH',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(signInInfo)
            })
            })

           
            .then(res =>res.json())
            .then(data=>{
                console.log('after update patch',data)
            })

            .catch(error => {
                console.log(error)
            })


    }
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="w-full max-w-md">
                <form onSubmit={handleSignin} className="fieldset p-6 border rounded-lg shadow-md">

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

export default Signin;