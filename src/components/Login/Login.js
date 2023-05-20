import React from "react";
import { useRef, useState, useEffect } from "react";
import './Login.css'
import axios from 'axios';
const LOGIN_URL = '/users/login';

const Login = () => {
    const userRef = useRef();
    const errRef = useRef();

    const[user, setUser] = useState('');
    const[pwd, setPwd] =useState('');
    const[errMsg, setErrMsg] = useState('');
    const[success, setSuccess] = useState('');

    useEffect(()=>{
        userRef.current.focus();
    }, [])

    useEffect(()=>{
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user, pwd);
        const response = await axios.post('http://localhost:9000/users/login',
            JSON.stringify({ user, pwd }),
            {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true
            }
        );
        setUser('');
        setPwd('');
        setSuccess(true);
    }

    return(
        <>
        {success ? (
            <section>
                <h1>You are logged in!</h1>
                <br/>
                <p>
                    <a href="#">Go to Home</a>
                </p>
            </section>
        ):(
        <section>
            <p ref={errRef} className={errMsg ? "errmsg" :
            "offscreen"} aria-live="assertive">{errMsg}</p>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input 
                    type="text"
                    id="username"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                    required
                />
                <label htmlFor="password">Password:</label>
                <input 
                    type="password"
                    id="password"
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    required
                />
                <button>Sign In</button>
            </form>
            <p>
                Need an Account?<br />
                <span className="line">
                    {/*put router link here*/}
                    <a href="#">Sign Up</a>
                </span>
            </p>
        </section>
        )}
        </>
    )
}
export default Login