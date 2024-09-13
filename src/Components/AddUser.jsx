import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import userProvider from '../MyContext/UserProvider';

const AddUser = () => {
    const {users, addUser, updateUser, getUserById, deleteUser}=useContext(userProvider)

    const [userData, setUserData]=useState({
        name: "",
        username: "",
        email: "",
        address: {
          street: "",
          suite: "",
          city: "",
          zipcode: "",
          geo: {
            lat: "",
            lng: ""
          }
        },
        phone: "",
        website: "",
        company: {
          name: "",
          catchPhrase: "",
          bs: ""
        }
    })
    const navigate=useNavigate();
    const handleNavigate=()=>{
        navigate("/dashboard/manipulation")
    }

const handleClick=(e)=>{
    e.preventDefault();
    
    addUser(userData);
    alert(`User Added Successfully!!! Id is : ${users.length+1}`);
   
    setUserData({
        name: "",
        username: "",
        email: "",
        address: {
          street: "",
          suite: "",
          city: "",
          zipcode: "",
          geo: {
            lat: "",
            lng: ""
          }
        },
        phone: "",
        website: "",
        company: {
          name: "",
          catchPhrase: "",
          bs: ""
        }
    })
   
    
}

  return (
    <div className=' d-flex flex-column justify-content-center align-items-center w-100'>
        <form className='border p-3 text-center shadow ' onSubmit={handleClick} id='box' style={{width:"30rem", borderRadius:"10px"}}>
        <div className='text-center'><h5>Enter User Details</h5></div>
            <div className='mt-4'>
                
            
        <div  className='p-2 d-flex justify-content-between'><div><label>Name :</label></div> <div><input className='form-control' type="text" value={userData.name} onChange={(e)=>setUserData({...userData, name:e.target.value})}  required /></div>
        </div >
         <div  className='p-2 d-flex justify-content-between'><div><label>User Name :</label></div><div><input className='form-control' type="text" value={userData.username} onChange={(e)=>setUserData({...userData, username:e.target.value})}  required /></div>
         </div >
        <div  className='p-2 d-flex justify-content-between'><div><label>Email :</label></div>  <div><input className='form-control' type="text" value={userData.email} onChange={(e)=>setUserData({...userData, email:e.target.value})}  required /></div>
        </div >
         <div  className='p-2 d-flex justify-content-between'><div><label>Street Name :</label></div><div><input className='form-control' type="text" value={userData.address.street} onChange={(e)=>setUserData({...userData, address:{...userData.address, street:e.target.value}})}  required /></div>
         </div >
        <div  className='p-2 d-flex justify-content-between'><div><label>Suite Name :</label></div> <div><input className='form-control' type="text" value={userData.address.suite} onChange={(e)=>setUserData({...userData, address:{...userData.address, suite:e.target.value}})}  required /></div>
        </div >
        <div  className='p-2 d-flex justify-content-between'><div><label>City Name :</label></div> <div><input className='form-control' type="text" value={userData.address.city} onChange={(e)=>setUserData({...userData, address:{...userData.address, city:e.target.value}})}  required /></div>
        </div >
         <div  className='p-2 d-flex justify-content-between'><div><label>Zipcode :</label></div><div><input className='form-control' type="text" value={userData.address.zipcode} onChange={(e)=>setUserData({...userData, address:{...userData.address, zipcode:e.target.value}})}  required /></div>
         </div >
         <div  className='p-2 d-flex justify-content-between'><div><label>Latitude</label></div><div><input className='form-control' type="text" value={userData.address.geo.lat} onChange={(e)=>setUserData({...userData, address:{...userData.address, geo:{...userData.address.geo,lat:e.target.value}}})}  required /></div>
         </div>
         
         <div  className='p-2 d-flex justify-content-between'><div><label>Longitude</label></div><div><input className='form-control' type="text" value={userData.address.geo.lng} onChange={(e)=>setUserData({...userData, address:{...userData.address, geo:{...userData.address.geo,lng:e.target.value}}})}  required /></div>
        
         </div>
         <div  className='p-2 d-flex justify-content-between'><div><label>Phone :</label></div> <div><input className='form-control' type="text" value={userData.phone} onChange={(e)=>setUserData({...userData, phone:e.target.value})}  required /></div>
         </div >
        <div  className='p-2 d-flex justify-content-between'><div><label>Website :</label></div><div><input className='form-control' type="text" value={userData.website} onChange={(e)=>setUserData({...userData, website:e.target.value})}  required /></div>
        </div >
         <div  className='p-2 d-flex justify-content-between'><div><label>Comapany Name :</label></div><div><input className='form-control' type="text" value={userData.company.name} onChange={(e)=>setUserData({...userData, company:{...userData.company, name:e.target.value}})}  required /></div>
         </div >
        <div  className='p-2 d-flex justify-content-between'><div><label>CatchPhrase :</label></div><div><input className='form-control' type="text" value={userData.company.catchPhrase} onChange={(e)=>setUserData({...userData, company:{...userData.company, catchPhrase:e.target.value}})}  required /></div>
        </div >
        <div  className='p-2 d-flex justify-content-between'><div><label>bs :</label></div><div><input className='form-control' type="text" value={userData.company.bs} onChange={(e)=>setUserData({...userData, company:{...userData.company, bs:e.target.value}})}  required /></div>
        </div >
        <div className='mt-4 '><button className='btn btn-primary' type='submit'>Add User</button>
        </div>
         
        
            </div>
        </form>
       <div className='d-flex mt-4 mb-5 justify-content-evenly' style={{width:"30rem"}}>
       <button className='btn btn-warning' onClick={handleNavigate}>Manipulation</button>
      
       </div>
    </div>
  )
}

export default AddUser