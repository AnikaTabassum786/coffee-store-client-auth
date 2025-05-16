import React from 'react';

const Signin = () => {

    const handleSignin=(e)=>{
          e.preventDefault()
    }
    return (
         <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md">
        <form onClick={handleSignin} className="fieldset p-6 border rounded-lg shadow-md">

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