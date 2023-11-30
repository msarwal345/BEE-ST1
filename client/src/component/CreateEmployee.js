import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function CreateEmployee() {
    const [name,setName]=useState()
    const [price,setPrice]=useState()
    const [description,setDescription]=useState()
    const [category,setCategory]=useState()

    const navigate=useNavigate();

    const submit=(e)=>{
        e.preventDefault();
        axios.post("https://localhost:3001/createEmployee",{name,price,description,category})
        .then(result => {console.log(result)
          navigate('/')
    })
        .catch(err =>console.log(err))
    }
  return (
    <div>
        <h2>Add Employee</h2>
        <form>
        <label>Name:</label>
        <input type='text' onChange={(e)=>{setName(e.target.value)}}/>
        <label>Category:</label>
        <input type='text' onChange={(e)=>{setCategory(e.target.value)}}/>
        <label>Price:</label>
        <input type='number'onChange={(e)=>{setPrice(e.target.value)}}/>
        <label>Description:</label>
        <input type='number'onChange={(e)=>{setDescription(e.target.value)}}/>
        <button className='btn btn-success' onClick={submit}>Submit</button>        
        </form>
    </div>
  )
}
