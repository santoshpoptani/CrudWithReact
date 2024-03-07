import axios from "axios";
import React, { useState } from "react";
import {NavLink, useNavigate} from 'react-router-dom';

function Create(){

    const[values, setValue] = useState({
        name:"",
        address:"",
        phone:0
    })

    const navigate = useNavigate();

    const handleFunction=(event)=>{
        event.preventDefault();
        axios.post("http://localhost:3000/users",values)
        .then((res)=>{
            console.log(res)
            navigate("/")
        })
    }

    return (
        <div className="form-container">
  <h2>Add User</h2>
  <form className="simple-form" onSubmit={handleFunction}>
    <div className="form-group">
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" onChange={e=>setValue({...values,name:e.target.value})} />
    </div>
    <div className="form-group">
      <label htmlFor="address">Address:</label>
      <input type="text" id="address" onChange={e=>setValue({...values,address:e.target.value})} />
    </div>
    <div className="form-group">
      <label htmlFor="phone">Phone:</label>
      <input type="text" id="phone" onChange={e=>setValue({...values,phone:e.target.value})} />
    </div>
    <div className="button-container">
  <button type="submit">Submit</button>
  <NavLink to={"/"} className={"nav-link"}>Back</NavLink>
</div>
  </form>
</div>
      );
}

export default Create;