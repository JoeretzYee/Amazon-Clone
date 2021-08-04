import { Link, useHistory } from "react-router-dom";
import React, { useState } from "react";
import "./Login.css";
// import auth from firebase file
import { auth } from "../firebase";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                alert(`Login as ${email}`);
                history.push("/");
            })
            .catch((error) => alert(error.message));
    };

    const register = () => {
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                alert(`${email} Successfully Created`);
                setEmail("");
                setPassword("");
            })
            .catch((error) => alert(error.message));
    };

    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className='login__logo'
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
                    alt=''
                />
            </Link>
            <div className='login__container'>
                <h1>Sign In</h1>
                <form>
                    <h5>Email</h5>
                    <input
                        type='text'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <h5>Password</h5>
                    <input
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        onClick={signIn}
                        type='submit'
                        className='login__signinButton'>
                        Sign In
                    </button>
                </form>
                <p>
                    By signing-in you agree to Amazon's Clone Conditions of Use
                    & Sale. Please see our Privacy Notice, your Cookies Notice
                    and our Interest-Based Ads Notice
                </p>
                <button onClick={register} className='login__registerButton'>
                    Create your Amazon account
                </button>
            </div>
        </div>
    );
}

export default Login;
