import React from 'react'
import { FaSearch } from 'react-icons/fa';

export const Header = () => {
  return (
    <div className='top-nav'>
      <div className='nav-wrapper'>
        <span><FaSearch />  Search</span>

        <div className='logo'>
        <h3>LOGO</h3>
        </div>
      </div>
      

    </div>
  )
}
