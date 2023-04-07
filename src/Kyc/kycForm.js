import React, { useEffect, useState } from 'react'
import './kycForm.css'
import { FaImage } from 'react-icons/fa'

const KycForm = () => {
let dialCode=[]

async function fetchAPI(){
try{
  let result =await fetch("https://gist.githubusercontent.com/anubhavshrimal/75f6183458db8c453306f93521e93d37/raw/f77e7598a8503f1f70528ae1cbf9f66755698a16/CountryCodes.json")
  let b =await result.json()
  // setCode(b)
  dialCode.push(b)
 
console.log(dialCode)
}catch(err){
  alert(err)
}
}

useEffect(() => {
  fetchAPI()
 


  
}, [])



// console.log(result)


  return (
    <>
     <main className='main'>
      <nav>
        <h1>LOGO</h1>
      </nav>
       <div className='container '>
         <div className="contact mx-auto ">
           <h1 className='py-4'>Contact Information</h1>
            <label className="form-label">First Name</label>
            <input type="text" className="form-control " />
            <label className="form-label">Last Name</label>
            <input type="text" className="form-control" />
            <label className="form-label">Company Name</label>
            <input type="text" className="form-control" />
            <label className="form-label">Address1</label>
            <input type="address" className="form-control"  />
            <label className="form-label">Address2</label>
            <input type="address" className="form-control"  />
            <label className="form-label">Email Address</label>
            <input type="email" className="form-control"  />
            <label className="form-label">Phone Number</label>
            <input type="text" className="form-control" />
          </div>
       </div>
       <div className='container py-4'>
         <div className='member mx-auto'>
           <h1 className='py-4'>Membership Information</h1>
           <label className="form-label">Membership Plan</label>
           <div className='cover'>
             <select className='select'>
              <option disabled selected></option>
              <option value="">Investigation Registration</option>
              <option value="">Issuer Resgitration</option>
              <option value="">Admin-Blog Author</option>
              <option value="">General User Account</option>
              <option value="">Accredited Investors</option>
             </select>
           </div>
            <label className="form-label">Username</label>
            <input type="text" className="form-control"  placeholder='username'/>

            <label className='label' >
            <div className='selectimg'>
              <FaImage className='icon'/> 
              <p className=''>select image</p>
            </div>
           <input type='file' className='img bg-white'></input>
          </label>
         </div>
         <input type="Submit" className='submit mx-auto'/>
        </div>
   
     </main>
    </>
  )
}

export default KycForm