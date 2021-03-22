import React, { useState } from 'react'
import './Login.css'
import {Link, useHistory} from "react-router-dom";
import {auth} from "./firebase";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
        })
        .catch(error => alert(error.message))
        // Firebase register
    }

    const register = e => {
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) =>
            {
                console.log(auth);
                if (auth){
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
        // Firebase register
    }

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
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>

                    <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
                </form>
                <p>Helloc </p>

                <p>
                By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                </p>
                <button onClick={register} className='login__registerButton'>Create account</button>

            </div>

         </div>
             )
}


export default Login
