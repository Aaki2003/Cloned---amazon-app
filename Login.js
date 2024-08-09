import React, { useState } from 'react'
import './Login.css'
import { Link , useNavigate } from 'react-router-dom'
import { auth , db } from './firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

function Login() {
    const history = useNavigate();
    const[email,setEmail] = useState('');
    const [password,setPasswword] = useState('');

    const signIn = async(e) =>{
        e.preventDefault();

        // Firebase usage
        try{
            await signInWithEmailAndPassword(auth,email,password);
            console.log("user logged in Successfully");
            history('/');
        }catch(e){
            alert(e.message);
        }

        

    }

    const register = async(e) =>{
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth,email,password);
            //successfully created a new user with email and password
            const user = auth.currentUser;
            if(user){
                history('/')
            }
            console.log(user);
        }catch(error){
            console.log(error.message)
        }

        //firebase usage
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img className='login_logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' />
            </Link>

            <div className='login_container'>
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e=>setEmail(e.target.value)}/>
                    <h5>Password </h5>
                    <input type='password' value={password} onChange={e=>setPasswword(e.target.value)}/>
                </form>
                <button type= 'submit' className='sign_in_button' onClick={signIn}>Sign In</button>
                <p>Don't have an amazon account?</p>
                <button className='register_button' onClick={register}>Create Your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login