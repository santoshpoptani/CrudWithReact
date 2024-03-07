import axios from "axios";
import React,{useEffect, useState} from "react"
import { NavLink, useParams } from "react-router-dom";

function Read(){
    const[response , setResponse] = useState([]);

    const {id} = useParams();

    useEffect(()=>{
        axios.get(`http://localhost:3000/users`,{
            params:{
                id: id
            }
        })
        .then((res)=>{
            setResponse(res.data);
        })
        

    },[])


    return(
        <div className="read-container">
        {
          response.map((r) => (
            <div className="user-details" key={r.id}>
              <p>ID: {r.id}</p>
              <p>Name: {r.name}</p>
              <p>Address: {r.address}</p>
              <p>Phone: {r.phone}</p>
              <NavLink to={{pathname:`/update/${id}`}} state={{obj:r}} className="read-edit-button">Edit</NavLink>
              <NavLink to={"/"} className="read-back-button">Back</NavLink>
            </div>
          ))
        }
      </div>
    )
}
export default Read;