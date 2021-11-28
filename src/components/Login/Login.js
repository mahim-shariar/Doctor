import React, { useState } from "react";
import { Link,useLocation,useHistory } from "react-router-dom";
import useAuth from "../hooks/useAuth";

import './Login.css'

const Login = () => {
    let {setIsLoading,signInWithGoogle,setUser,error,setError,processLogin,user} = useAuth();
    
    const location  = useLocation();
    const history = useHistory();

    // const redirect_uri = location.state?.from || '/' ;
    let redirect_uri = location.state?.form || '/';

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    
    const handleLogin = (e) => {
        e.preventDefault();


        if(!email){
            setError("You must input your Email");
            return;
        }

        if(!password){
            setError("You must input your Password");
            return;
        }

        processLogin(email,password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            // ...
            history.push(redirect_uri)
            setError('')
          })
          .catch(error => {
            setError(`${error}`)
          })
    }



    let googleSignIN = ()=>{
        signInWithGoogle()
        .then(res =>{
            setUser(res.user)
            history.push(redirect_uri)
        })
        .finally(()=> setIsLoading(false))
    }

    const handleChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }
    
    return (
        <div className='container p-3 p-5 mb-5 bg-white rounded shadow login-form d-flex flex-column align-items-center '>
            <div className='my-4' >  
                <h3> welcome to LogIn </h3>
            </div>
            <div>
                <h6> Email </h6>
                <input onBlur={handleChange} type="email" name="email" id="pass" />
            </div>
            <div className='mt-3' >
                <h6>
                    Password
                </h6>
                    <input onBlur={handlePasswordChange} type="password" name="password" id="pass" />
            </div>
            <div>
                <p className='text-danger' >{error}</p>
            </div>
            <div>
                <input className='btn btn-outline-primary'  type="submit" value="LogIn" onClick={handleLogin} />
            </div>
            <div className='my-3' > 
                <Link to='/signUp' > Create New Account </Link>
            </div>
            <div className='mt-5' >
                <button onClick={googleSignIN} className='btn rounded-circle text-danger font-weight-normal' > Google <span className='fs-6 font-weight-bold' >+</span> </button>
            </div>
        </div>

    );
};

export default Login;