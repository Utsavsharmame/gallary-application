import React from 'react'
import { useNavigate } from 'react-router-dom';

const About = () => {


  let navigate = useNavigate();

  const btnClick = () => {
    // alert('button clicked');
    // console.log('button clicked');
    navigate('/');

  }
  return (
    <div className='text-center '>
          <h1 className = 'text-center'> hello world</h1>


           <button className='bg-red-500 px-5 py-2 rounded-md cursor-pointer
           hover:bg-red-600 transition-all duration-300 font-medium' onClick={btnClick}>click me</button>
  

          <button className='bg-red-500 px-5 py-2 rounded-md cursor-pointer
           hover:bg-red-600 transition-all duration-300 font-medium' onClick={()=> {
            navigate(-1);
           }}>back me</button>
  
    </div>
  )
}

export default About
