import { PropTypes } from 'prop-types'
import React, { useContext, useEffect, useState } from 'react'
import userProvider from '../MyContext/UserProvider'
import { useNavigate } from 'react-router-dom';

const Manipulation = () => {

    const {users, addUser, updateUser, getUserById, deleteUser}=useContext(userProvider);
     const [click , setClick]=useState(false);
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
    
    
    const handleUpdate=()=>{
        setClick(false);
        updateUser(userData);
        alert("Data Updated SuccessFully!!!")
               
    }

    const handleDelete=()=>{
        setClick(false);
        deleteUser(userData.id);
        alert("Data Deleted SuccessFully!!!")
    }
 const navigate=useNavigate();
    const handleNavigate=()=>{
            navigate("/dashboard")
    }
    

  
   

    const handleClick=(e)=>{
        e.preventDefault()
       
       
        const userId=e.target.elements.id.value;
          const getUser=users.find(user=>user.id==userId);
        if(getUser){
            setUserData({
                id: getUser.id,
                name: getUser.name,
                username: getUser.username,
                email: getUser.email,
                address: {
                  street: getUser.address.street,
                  suite: getUser.address.suite,
                  city: getUser.address.city,
                  zipcode: getUser.address.zipcode,
                  geo: {
                    lat: getUser.address.geo.lat,
                    lng: getUser.address.geo.lng
                  }
                },
                phone: getUser.phone,
                website: getUser.website,
                company: {
                  name: getUser.company.name,
                  catchPhrase: getUser.company.catchPhrase,
                  bs: getUser.company.bs
                }
            })
               setClick(!click);
              
        }
        else{
            alert("User Not Found")
        }
        
        
    }

  return (
   
         <div className=' d-flex flex-column justify-content-center align-items-center w-100' >
        <form className='border shadow p-3 text-center ' onSubmit={handleClick} style={{width:"30rem", borderRadius:"10px"}}>
       
        <div><h5>Manipulation</h5></div>
        <div className='mt-4 d-flex justify-content-evenly'>
            <div>
                <input className='form-control'  type="number" min={1}  name='id'   placeholder='User Id' style={{width:"10rem"}} disabled={click}/>
            </div>
            <div><button className='btn btn-primary' type='submit' >{click ? 'Remove' : 'GetUser'}</button></div>
        </div>
        </form>
        {click ? (
          
    
            <div className='border shadow text-center m-5' style={{width:"30rem", borderRadius:"10px"}}>
                <form className='text-center ' onSubmit={handleClick} style={{width:"30rem"}}>
        <div className='text-center mt-4'><h5>User Details</h5></div>
            <div className='m-4'>
                
            <div  className='p-2 d-flex justify-content-between'><div><label>Id :</label></div> <div><input className='form-control' type="text" value={userData.id} readOnly style={{width:"15rem"}}  required /></div>
            </div >
        <div  className='p-2 d-flex justify-content-between'><div><label>Name :</label></div> <div><input className='form-control' type="text" value={userData.name} onChange={(e)=>setUserData({...userData, name:e.target.value})}style={{width:"15rem"}}  required /></div>
        </div >
         <div  className='p-2 d-flex justify-content-between'><div><label>User Name :</label></div><div><input className='form-control' type="text" value={userData.username} onChange={(e)=>setUserData({...userData, username:e.target.value})}style={{width:"15rem"}}  required /></div>
         </div >
        <div  className='p-2 d-flex justify-content-between'><div><label>Email :</label></div>  <div><input className='form-control' type="text" value={userData.email} onChange={(e)=>setUserData({...userData, email:e.target.value})}style={{width:"15rem"}}  required /></div>
        </div >
         <div  className='p-2 d-flex justify-content-between'><div><label>Street Name :</label></div><div><input className='form-control' type="text" value={userData.address.street} onChange={(e)=>setUserData({...userData, address:{...userData.address, street:e.target.value}})}style={{width:"15rem"}}  required /></div>
         </div >
        <div  className='p-2 d-flex justify-content-between'><div><label>Suite Name :</label></div> <div><input className='form-control' type="text" value={userData.address.suite} onChange={(e)=>setUserData({...userData, address:{...userData.address, suite:e.target.value}})}style={{width:"15rem"}}  required /></div>
        </div >
        <div  className='p-2 d-flex justify-content-between'><div><label>City Name :</label></div> <div><input className='form-control' type="text" value={userData.address.city} onChange={(e)=>setUserData({...userData, address:{...userData.address, city:e.target.value}})}style={{width:"15rem"}}  required /></div>
        </div >
         <div  className='p-2 d-flex justify-content-between'><div><label>Zipcode :</label></div><div><input className='form-control' type="text" value={userData.address.zipcode} onChange={(e)=>setUserData({...userData, address:{...userData.address, zipcode:e.target.value}})}style={{width:"15rem"}}  required /></div>
         </div >
         <div  className='p-2 d-flex justify-content-between'><div><label>Latitude</label></div><div><input className='form-control' type="text" value={userData.address.geo.lat} onChange={(e)=>setUserData({...userData, address:{...userData.address, geo:{...userData.address.geo,lat:e.target.value}}})}style={{width:"15rem"}}  required /></div>
         </div>
         
         <div  className='p-2 d-flex justify-content-between'><div><label>Longitude</label></div><div><input className='form-control' type="text" value={userData.address.geo.lng} onChange={(e)=>setUserData({...userData, address:{...userData.address, geo:{...userData.address.geo,lng:e.target.value}}})}style={{width:"15rem"}}  required /></div>
        
         </div>
         <div  className='p-2 d-flex justify-content-between'><div><label>Phone :</label></div> <div><input className='form-control' type="text" value={userData.phone} onChange={(e)=>setUserData({...userData, phone:e.target.value})}style={{width:"15rem"}}  required /></div>
         </div >
        <div  className='p-2 d-flex justify-content-between'><div><label>Website :</label></div><div><input className='form-control' type="text" value={userData.website} onChange={(e)=>setUserData({...userData, website:e.target.value})}style={{width:"15rem"}}  required /></div>
        </div >
         <div  className='p-2 d-flex justify-content-between'><div><label>Comapany Name :</label></div><div><input className='form-control' type="text" value={userData.company.name} onChange={(e)=>setUserData({...userData, company:{...userData.company, name:e.target.value}})}style={{width:"15rem"}}  required /></div>
         </div >
        <div  className='p-2 d-flex justify-content-between'><div><label>CatchPhrase :</label></div><div><input className='form-control' type="text" value={userData.company.catchPhrase} onChange={(e)=>setUserData({...userData, company:{...userData.company, catchPhrase:e.target.value}})}style={{width:"15rem"}}  required /></div>
        </div >
        <div  className='p-2 d-flex justify-content-between'><div><label>bs :</label></div><div><input className='form-control' type="text" value={userData.company.bs} onChange={(e)=>setUserData({...userData, company:{...userData.company, bs:e.target.value}})}style={{width:"15rem"}}  required /></div>
        </div >
        
         
        
            </div>
        </form>
                <div className='text-center d-flex justify-content-evenly'>
                      <div><button className='btn btn-primary m-3' onClick={handleUpdate}>Update</button>
                      </div>
                      <div><button className='btn btn-danger m-3' onClick={handleDelete}>Delete</button>
                      </div>
                      </div>
                </div>
               
                 
        ):null
        

        }
        <div className='m-5'>
            <button className='btn btn-success' onClick={handleNavigate}>Add User</button>
        </div>
    </div>
  )
}
export default Manipulation