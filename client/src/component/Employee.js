import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios  from 'axios'
export default function Employee() {
    const[user,setUser]=useState([])
    useEffect(()=>{
        axios.get('https://localhost:3001/').
        then(result =>{
            setUser(result.data)
        })
        .catch(err=>console.log(err))
    },[])
  return (
    <div>
        <Link to="/create" className='btn btn-success'>Add +</Link>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Description</th>

                </tr>
            </thead>
            <tbody>
                {
                    user.map((users)=>{
                        return <tr>
                            <td>{users.Name}</td>
                            <td>{users.Price}</td>
                            <td>{users.Category}</td>
                            <td>{users.Description}</td>
                            <td>
                            <Link to="/update" className='btn btn-success'><button>Update</button></Link>
                             <button>Delete</button>
                             </td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
