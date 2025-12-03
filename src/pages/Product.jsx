import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
     <div className='flex justify-center gap-10 py-10'>
       <Link className='text-xl font-bold' to='/product/men' >Men </Link>
       <Link className='text-xl font-bold'  to='/product/women'>Women</Link>
       
      <Link className='text-xl font-bold'  to='/product/kids'>kids</Link>
       
      <h1>product</h1>
      <Outlet/>
   
    </div>

  )
}

export default Product
