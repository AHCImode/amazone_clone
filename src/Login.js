import React, { useState } from 'react'
import './Login.css'
import {Link} from "react-router-dom";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 

    return (
        <div className='login'>
            <Link to='/'>
                <img 
                className='login__logo'
                src='http://www.pngimg.com/uploads/amazon/amazon_PNG11.png'
                />    
            </Link> 

            <div className='login__container'>
                <h1>Sign In</h1>
                <form>
                    <h5>E mail </h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>
                </form>
                <form>
                    <h5>Password </h5>
                    <input type='password'/>

                    <button className='login__signInButton'>Sign In</button>
                </form>

                <p>
                By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                </p>
                <button className='login__registerButton'>Create Amazon account</button>

            </div>

         </div>
             )
}


export default Login
