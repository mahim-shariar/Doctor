import React, { useState } from 'react';
import { Link,useHistory } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const SignUp = () => {
    
    let [email,setEmail] = useState('');
    let [pass , setPass] = useState('');
    let [name , setName] = useState('');
    
    let {error,createNewUser,setUser,setUserName,setError} = useAuth();

    const history = useHistory();
    const redirect_uri = '/login';

    
    let handleEmail = e =>{
        setEmail(e.target.value)
    }
    let handlePass = e =>{
        setPass(e.target.value)
    }
    let handleName = e =>{
        setName(e.target.value)
    }
    
    let NewUser =(e)=>{
        e.preventDefault();
        
        if (pass.length < 6) {
            setError("Password Must be at least 6 char long");
            return;
          }
          if(!/(?=.*[A-Z].*[A-Z])/.test(pass)){
            setError("Password Must include 2 uper case");
            return;
          }
          if(!name){
              setError("You must input your Name");
              return;
          }
        
        
        
        createNewUser(email,pass)
        .then(res=>{
            setUser(res.user)
            setError('');
            setUserName({displayName: `${name}`})
            .then(()=>{
                //history
                history.push(redirect_uri)
                
            })
            .catch((error)=>{
                setError(`${error}`)
            })
        })
        .catch(error=>{
            setError(`${error}`)
        })
        
    }
    
    return (
        <div className='container p-3 p-5 mb-5 bg-white rounded shadow login-form d-flex flex-column align-items-center '>
            <div className='my-4' >  
                <h3> welcome to Sign Up </h3>
            </div>
            <div className='my-2' >
                <h6> Name </h6>
                <input onBlur={handleName} type="text" />
            </div>
            <div>
                <h6> Email </h6>
                <input onBlur={handleEmail}  type="email" name="email" id="pass" />
            </div>
            <div className='mt-3' >
                <h6>
                    Password
                </h6>
                    <input onBlur={handlePass}  type="password" name="password" id="pass" />
            </div>
            <p className='mt-3 text-danger'>{error}</p>
            <div className='my-3' >
                <input onClick={NewUser} className='btn btn-outline-primary' type="submit" value="SignUp" />
            </div>
            <div className='my-3' > 
                <Link to='/login' > You have Account.: <br /> Please Login </Link>
            </div>
            
        </div>
    );
};

export default SignUp;