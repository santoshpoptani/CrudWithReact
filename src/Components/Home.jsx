import React,{useEffect, useState} from "react"
import axios from 'axios'
import{NavLink, useNavigate} from 'react-router-dom'

function Home(){
    const[data , setData] = useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
        axios.get("http://localhost:3000/users")
        .then((res)=>{
           setData(res.data)
        })
    },[])

    const handleDelete = (id)=>{
        const confirm = window.confirm("Are you sure you want to Delete?")
       if(confirm){
        axios.delete(`http://localhost:3000/users/${id}`)
        .then((res)=>{
            console.log(res)
            location.reload();
        })
       }
    }

    return (
        <div className="container">
          <h1>List Of Users</h1> 
         
          <div className="inner-div"> 
          <div>
            <NavLink to={"/create"} className={"button-link"} >Add +</NavLink>
          </div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th className="actions-header">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((d, i) => (
                            <tr key={i}>
                            <td>{d.id}</td>
                            <td>{d.name}</td>
                            <td>{d.address}</td>
                            <td>{d.phone}</td>
                            <td><NavLink to={`/read/${d.id}`} className="read-button">Read</NavLink></td>
                            <td><NavLink to={{pathname:`/update/${d.id}`}} state={{obj:d}} className="edit-button">Edit</NavLink></td>
                            <td><NavLink onClick={e=>handleDelete(d.id)} className="delete-button">Delete</NavLink></td>
                            </tr>
                         ))
                    }
          </tbody>
            </table>
          </div>
        </div>
      );
}

export default Home;