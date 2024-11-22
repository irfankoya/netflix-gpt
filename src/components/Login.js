

import React, { useState } from 'react';
import Header from './Header';

const Login = () => {
  const [isSignInForm, setIsSignInForm]=useState(true)
  const toggleSignInForm=()=>{
setIsSignInForm(!isSignInForm)
  }
  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://assets.nflxext.com/ffe/siteui/vlv3/151f3e1e-b2c9-4626-afcd-6b39d0b2694f/web/IN-en-20241028-TRIFECTA-perspective_bce9a321-39cb-4cce-8ba6-02dab4c72e53_large.jpg')" }}>
      
      <div className="absolute inset-0 bg-black opacity-40"></div>

     
      <div className="relative z-10">
        <Header />
      </div>

      
      <div className="relative z-10 flex items-center justify-center h-full bg opacity-90">
        <form className="bg-black/70 text-white rounded-lg p-8 max-w-sm w-full">
          <h1 className="text-3xl font-bold mb-6">{isSignInForm?"Sign In":"Sign Up"}</h1>
         {!isSignInForm &&( <input type="Name" placeholder="Name" className="w-full p-3 mb-4 rounded bg-gray-800 text-white focus:outline-none focus:bg-gray-700" />)}
          <input type="email" placeholder="Email" className="w-full p-3 mb-4 rounded bg-gray-800 text-white focus:outline-none focus:bg-gray-700" />
          <input type="password" placeholder="Password" className="w-full p-3 mb-4 rounded bg-gray-800 text-white focus:outline-none focus:bg-gray-700" />
          <button className="w-full p-3 bg-red-600 rounded font-semibold hover:bg-red-700">{isSignInForm?"Sign In":"Sign Up"}</button>
          <p className='pt-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm?"New to Netflix? Sign Up Now":"Already have an account! Sign In"}</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
