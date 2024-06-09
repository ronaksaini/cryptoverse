import React, { useState } from 'react'
import '../Login/Login.css'
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
const Signup = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp=async(e)=>{
      e.preventDefault();
      try{
        await createUserWithEmailAndPassword(auth,email,password)
        .then(()=>{
          alert("Signed Up Successfully");
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
            <h2 style={{textAlign:"center",marginBottom:"40px"}}>Sign Up</h2>
            <div className="input-container">
                <label>E-mail Address:</label>
                <input type="text" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            </div>
            <div className="input-container">
                <label>Password:</label>
                <input type="password" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            </div>
            <button onClick={handleSignUp}>Sign Up</button>
            <p>Already a user ? <span onClick={()=>navigate('/login')}>Login</span></p>
        </form>
      </div>
    </div>
  )
}

export default Signup
