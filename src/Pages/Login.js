// import React from 'react';
import { useState,React, useEffect  } from "react";
import "./Register.css";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

import{BrowserRouter as Router, Routes,Route,Link,Outlet,} from "react-router-dom";
import {Grid,TextField,FormHelperText,FormControl,Input,InputLabel,Form }from '@mui/material';

import Button from '@mui/material/Button';

AOS.init();
function Login() {
    // const initialValues = { userName: "", userPassword: "" };
    // const [formValues, setFormValues] = useState(initialValues);
    // const [formErrors, setFormErrors] = useState({});
    // const [isSubmit, setIsSubmit] = useState(false);
  
    // const handleChange = (e) => {
    //   const { name, value } = e.target;
    //   setFormValues({ ...formValues, [name]: value });
    // };
  
    // const handleSubmit = (e) => {
    //   e.preventDefault();
    //   setFormErrors(validate(formValues));
    //   setIsSubmit(true);
    //   handleOnSubmit();
    // };
  
    // const handleOnSubmit = () => {
    //   console.log(formValues);
    // };
    // useEffect(() => {
    //   console.log(formErrors);
    //   if (Object.keys(formErrors).length === 0 && isSubmit) {
    //     console.log(formValues);
    //   }
    // }, [formErrors, formValues, isSubmit]);
    // const validate = (values) => {
    //   const errors = {};
    // //   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    // const regex=/^[a-zA-Z0-9]{8,}$/i;
    //   if (!values.userName) {
    //     errors.userName = "Email is required!";
    //   } else if (!regex.test(values.userName)) {
    //     errors.userName = "This is not a valid email format!";
    //   }
    //   if (!values.password) {
    //     errors.password = "Password is required";
    //   } else if (values.password.length < 8) {
    //     errors.password = "Password must be more than 8 characters";
    //   } else if (values.password.length > 12) {
    //     errors.password = "Password cannot exceed more than 12 characters";
    //   } else if (!/([A-Z]+)/g.test(values.password)) {
    //     errors.password = "Password must have at least one Uppercase Character.";
    //   } else if (!/[@#*&%^!,]/g.test(values.password)) {
    //     errors.password = "Password must have special Character.";
    //   } else if (!/[0-9]/g.test(values.password)) {
    //     errors.password = "Password must have numbers.";
    //   }
  
    //   return errors;
    // };



    const [data,setData]=useState({});
const [id,setId]=useState(1);
useEffect(()=>{
  fetch(`http://localhost:8080/UserModel/${id}`)
  .then((response)=>response.json())
  .then((data) => setData(data)
        // (emaildata)=>setEmail(emaildata.email)
  );
},[id]);





    return (
        <div className='login'>
        
            <Grid container  className='row1'  item xs={12} sm={4} md={12}>
                <Grid >
                <img data-aos='slide-left' data-aos-duration='1500' style={{height : '80vh' }} src="https://images.unsplash.com/photo-1419640303358-44f0d27f48e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1985&q=80" alt="image" />
                  </Grid>
                  <Grid>
                    {/* <img data-aos='slide-left' data-aos-duration='1500' style={{height : '70vh' }} src="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1856&q=80" alt="image" /> */}
                    <h1 className='login-logo'>PG Admission</h1>
                </Grid>
                <Grid className='logform' >
                    <form  className='login-form '
                    //  onSubmit={handleSubmit} 
                    >
                       <Grid><h1>Login</h1></Grid> 
                        <hr />
                       
                           <Grid>
                           <FormControl  >
                                  <InputLabel htmlFor="my-input">Username</InputLabel>
                                  <Input id="my-input" aria-describedby="my-helper-text" 
                                  type="text"
                                  name="userName"
                                  placeholder="Enter Email"
                                  autoFocus
                                  // value={formValues.userName}
                                  // onChange={handleChange}
                                  />   
                                     {/* <p>{formErrors.email}</p> */}
                               </FormControl>
                           </Grid>

                           <Grid>
                           <FormControl>
                                  <InputLabel htmlFor="my-input">Password</InputLabel>
                                  <Input id="my-input" aria-describedby="my-helper-text"
                                   type="password"
                                   name="password"
                                   placeholder="Enter Password"
                                  //  value={formValues.password}
                                  //  onChange={handleChange}
                                  />
                               
                                  {/* <p>{formErrors.password}</p> */}
                                  
                               </FormControl>
                           </Grid>
                         
                           <Grid className='btn2' >
                               <button 
                                onClick="removeRequired(this.form)"
                                className="btn btn1 btn-submit"
                                
                                type="submit"  >
                                    Login
                                    </button></Grid>
                                    {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
          <div
            className="ui message success"
            style={{ color: "green", fontWeight: "bolder", fontSize: 20 }} >
            Signed in successfully!!
          </div>) : null} */}
                          <Grid style={{textDecoration:"none"}}>
                          <Link to='/Register' style={{textDecoration:"none"}}>
                            New member? Click here to Register
                                </Link>
                              </Grid> 
                    </form>
                   
                </Grid>
            </Grid>
            
        </div>
    )
  
    }

export default Login;