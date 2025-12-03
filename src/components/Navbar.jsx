
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (

    <div className='flex bg-cyan-900 py-4 py-8 justify-between'>
    <h3 className='text-xl font-bold'> Utsav sharma</h3>
        <div  className='flex gap-8'>
        <Link className='text-lg font-bold' to='/'>Home</Link>
        <Link className='text-lg font-bold' to='/About'>About</Link>
        <Link className='text-lg font-bold' to='/contact'>contact</Link>
         <Link className='text-lg font-bold' to='/product'>product</Link>
        
        </div>
        </div>
        
    )
}
export default Navbar;
