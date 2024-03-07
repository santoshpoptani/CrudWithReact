import axios from "axios";
import React, { useEffect, useState } from "react"
import { NavLink, Navigate, useLocation, useNavigate } from 'react-router-dom';

function Update(){
    const location = useLocation();
    const naviagte = useNavigate();
    const[values,setValue] = useState({
        name:"",
        address: "",
        phone: ""
    })
    const data =location.state.obj
   
    useEffect(()=>{
        setValue(data)
    },[])

  const handelUpdate=(event)=>{
    event.preventDefault();
    axios.put(`http://localhost:3000/users/${data.id}`,values)
    .then((res)=>{
        console.log(res)
        naviagte("/")
    })

  }
    return(
        <div className="form-container">
        <h2>Update User</h2>
        <form className="simple-form" onSubmit={handelUpdate} >
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" value={values.name} 
            onChange={e=>setValue({...values,name:e.target.value})}/>
          </div>
          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <input type="text" id="address" value={values.address}
            onChange={e=>setValue({...values,address:e.target.value})}/>
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input type="text" id="phone" value={values.phone}
            onChange={e=>setValue({...values,phone:e.target.value})}/>
          </div>
          <div className="button-container">
        <button type="submit">Submit</button>
        <NavLink to={"/"} className={"nav-link"}>Back</NavLink>
    
      </div>
        </form>
      </div>
    )
}

export default Update;