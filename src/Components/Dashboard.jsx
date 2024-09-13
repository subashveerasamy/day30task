import axios from 'axios'
import React, { useEffect, useReducer } from 'react'
import UserReducer from '../Reducrs/UserReducer'
import UserProvider from '../MyContext/UserProvider'
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    const [users, dispatch]=useReducer(UserReducer,[]);

    useEffect(()=>{
        axios.get('/')
        .then((response)=> 
        dispatch({type:"GET_USERS", payload:response.data})
        )
        
    },[users])

    const addUser=(users)=>{
      console.log(users)
        axios.post('/', users)
        .then((response)=>
        dispatch({type:"ADD_USER", payload:response.data})
        )
        .then((data)=>console.log(data)
        )
    }

    const updateUser=(userData)=>{
      const id=userData.id;
      console.log(typeof(id))
        axios.put(`/${id}`, userData)
        .then((response)=>{
        dispatch({type:"UPDATE_USER", payload:response.data});
        })  .catch((error) => {
          console.error("Error fetching user by ID:", error);
      });
        
    }
    const getUserById=(id)=> {
        axios.get(`/${id}`)
        .then((response)=>
        dispatch({type:"GET_USER_BY_ID", payload:response.data})
        )
        
    }

    const deleteUser=(id)=>{
        axios.delete(`/${id}`)
        .then((response)=>
        dispatch({type:"DELETE_USER", payload:response?.data?.id})
        )
        
    }

  return (
    <div>
      <UserProvider.Provider value={{users, addUser, updateUser, getUserById, deleteUser}}>
      <div className='p-5'>
        <div className='text-center p-3 mb-3'><h3>Welcome to DashBoard</h3></div>
      <Outlet/>

      </div>
      </UserProvider.Provider>
        {/* <div><textarea name="addUser" style={{height:"40rem", width:"20rem"}} defaultValue={`
    "id": ,
    "name": "",
    "username": "",
    "email": "",
    "address": {
      "street": "",
      "suite": "",
      "city": "",
      "zipcode": "",
      "geo": {
        "lat": "",
        "lng": ""
      }
    },
    "phone": "",
    "website": "",
    "company": {
      "name": "",
      "catchPhrase": "",
      "bs": ""
    }`}></textarea></div> */}


    </div>
  )
}

export default Dashboard