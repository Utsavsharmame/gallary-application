import React from 'react'
import { useNavigate } from 'react-router-dom'
const Nav2 = () => {

    
  let navigate = useNavigate();

  const btnClick = () => {
    // alert('button clicked');
    // console.log('button clicked');
    navigate('/');

  }
  return (
    <div className='py-2 px-2 bg-cyan-800'>
       <button className='bg-red-500 px-5 py-2 rounded-md cursor-pointer
           hover:bg-red-600 transition-all duration-300 font-medium' 
           onClick={btnClick}>click me</button>
  

          <button className='bg-red-500 px-5 py-2 rounded-md cursor-pointer
           hover:bg-red-600 transition-all duration-300 font-medium' onClick={()=> {
            navigate(-1);
           }}>back me</button>
         
          <button className='bg-red-500 px-5 py-2 rounded-md cursor-pointer
           hover:bg-red-600 transition-all duration-300 font-medium' onClick={()=> {
            navigate(+1);
           }}>next me</button>
  




    </div>
  )
}

export default Nav2