import React, { useState } from 'react'
import './Request.css'
import data from './RequestMap'


const Request = () => {
  return (
   <>
   <h2 className='kyc'>KYC Request Approval</h2>
   <hr/>
     <div className='container'>
        <div className='requestlist '>
          <p>Date</p>
          <p>Name</p>
          <p>Address</p>
          <p>Membership Plan</p>
          <p>phonenumber</p>
          <p>email</p>
          <p>username</p>
          <p>status</p>
        </div>
          {data.map ((data,index ) => {
            return(
       <div className={'container ' + data.status} key={index} >
          <div className='row  py-4 pe-4'>
            <div className=' fl col-md-6 d-flex'>
              <p className=''>{data.date}</p>
              <p className=''>{data.name}</p>
              <p className=''>{data.address}</p>
              <p className=''>{data.Membershipplan}</p>
            </div>
            <div className='sl col-md-6 d-flex '>
              <p>{data.phonenumber}</p>
              <p className=''>{data.email}</p>
              <p className=''>{data.username}</p>
              <p className=''>{data.status}</p>
            </div>
              </div>
         </div>
            )
          })}
      </div>
  </>
  )
}

export default Request