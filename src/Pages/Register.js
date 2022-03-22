// import React from 'react';
import "./Register.css";
import { useState,React } from "react";


import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

import{BrowserRouter as Router, Routes,Route,Link,Outlet,useNavigate} from "react-router-dom";
import {Grid,TextField,FormHelperText,FormControl,Input,InputLabel }from '@mui/material';

import Button from '@mui/material/Button';
AOS.init();
function Register() {
    const[email,setEmail]=useState('')
  const[name,setUsername]=useState('')
  const[mobileNumber,setMobile_number]=useState('')
  
  const[password,setPassword]=useState('')
//   const[confirm_password,setConfirm_password]=useState('')
const history=useNavigate();

  const handleOnSubmit=(e)=>{
    e.preventDefault()
    const user={email,name,mobileNumber,password}
    console.log(user)
    fetch("http://localhost:8080/UserModel",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(user)

  }).then(()=>{
    // console.log("New User added")
  // history.push('/Login');
  localStorage.removeItem('user');
  window.location.href="/Login"
    
  })
}
  



    return (
        <div className='login'>
            
            <Grid container  className='row1'  item xs={12} sm={4} md={12}>
                <Grid >
                <img data-aos='slide-left' data-aos-duration='1500' style={{height : '80vh' }} src="https://images.unsplash.com/photo-1419640303358-44f0d27f48e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1985&q=80" alt="image" />
                  </Grid>
                  <Grid>
                    <h1 data-aos='slide-left' data-aos-duration='1500' className='login-logo'>PG Admission</h1>
                </Grid>
                <Grid className='logform' >
                    <form  className='login-form p-5'  >
                       <Grid><h1>Register</h1></Grid> 
                        <hr />
                       <Grid>
                       <FormControl >
                                  <InputLabel htmlFor="my-input">Email address</InputLabel>
                                  <Input id="my-input" aria-describedby="my-helper-text"
                                  type="email" 
                                  autoFocus
                                  value={email}
                                  onChange={(e)=>setEmail(e.target.value)}
                                  />
                                  <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
                               </FormControl> 
                           </Grid> 
                           
                           <Grid>
                             
                               <FormControl>
                                  <InputLabel htmlFor="my-input">Phone number</InputLabel>
                                  <Input variant="outlined" id="my-input" aria-describedby="my-helper-text" 
                                   value={mobileNumber}
                                   onChange={(e)=>setMobile_number(e.target.value)}
                                  />
                                  
                               </FormControl> 
                           </Grid>

                           <Grid>
                           <FormControl>
                                  <InputLabel htmlFor="my-input">User Name</InputLabel>
                                  <Input id="my-input" aria-describedby="my-helper-text"
                                    // inputProps={{minLength:8}}
                                    autoFocus
                                    value={name}
                                    onChange={(e)=>setUsername(e.target.value)}    
                                  />
                                  
                               </FormControl> 
                           </Grid>

                           <Grid>
                           <FormControl>
                                  <InputLabel htmlFor="my-input">Password</InputLabel>
                                  <Input id="my-input" aria-describedby="my-helper-text" 
                                   autoFocus
                                   value={password}
                                   onChange={(e)=>setPassword(e.target.value)}
                                   type="password"
                                  />
                                  <FormHelperText id="my-helper-text">must be more than 8 character</FormHelperText>
                               </FormControl> 
                           </Grid>
                           {/* <Link to='/Login' style={{fontColor:"white"}}> */}
                           <Grid className='btn2'>
                           <Link to='/Login' style={{fontColor:"white"}}>
                             <button 
                           className="btn btn-submit"
                            onClick={handleOnSubmit}
                             type="submit"   >Register</button>
                                </Link>
                             </Grid>

                             {/* </Link> */}
                             <Link to='/Login' style={{fontColor:"white"}}>
                               <Grid style={{textDecoration:"none"}}>Already a member? Click here to Login</Grid> 
                                </Link>
                    </form>
                   
                </Grid>
            </Grid>
            
        </div>
    )
  
    }

export default Register;