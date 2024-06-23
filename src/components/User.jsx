import React, { useState } from 'react'

const User=(props)=> {
  const {user}=props;
  const [age, Setage]=useState(user.age);
  const btninc=()=>{
   Setage(age+1);
  }

  return (
    <div className='user-card'> 
    <h1>Name: {user.name}</h1>
    <h1>Name: {age}</h1>
    <button onClick={btninc}>increase age</button>
    <h2>Location: mohali</h2>
     </div>
  )
}

export default User