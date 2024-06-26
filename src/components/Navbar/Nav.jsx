import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom';
import config from '../../../config.json'
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Nav = () => {

  const hanleFeedback = () =>{
    toast.info('Coming Soon!', {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  }

  return (
    <nav className='fixed-nav max-w-[1440px] h-20 px-4 sm:px-20 md:px-24 lg:px-28 flex items-center justify-between animate-in'>
        <Link className='cursor-pointer font-pop text-btn transition-all duration-300 hover:scale-105' to="/">{config.name}</Link>
        <div>
          <button className='inline-flex items-center justify-center whitespace-nowrap text-md font-medium text-btn transition-all duration-300 hover:scale-105' onClick={hanleFeedback}>Feedback</button>
        </div>
    </nav>
  )
}

export default Nav
