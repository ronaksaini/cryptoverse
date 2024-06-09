import React, { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleSignIn=async(e)=>{
      e.preventDefault();
      try{
        await signInWithEmailAndPassword(auth,email,password)
        .then(()=>{
          alert("Signed in Successfully");
          navigate("/");
        })
      }
        catch(err){
          alert(err)
      
      }
    }
  return (
    <div className='login'>
      <div className="login-container">
        <form>
            <h2 style={{textAlign:"center",marginBottom:"40px"}}>Login</h2>
            <div className="input-container">
                <label>E-mail Address:</label>
                <input type="email" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            </div>
            <div className="input-container">
                <label>Password:</label>
                <input type="password" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            </div>
            <button onClick={handleSignIn}>Login</button>
            <p>Not a user ? <span onClick={()=>navigate('/signup')}>Sign Up</span></p>
        </form>
      </div>
    </div>
  )
}

export default Login
