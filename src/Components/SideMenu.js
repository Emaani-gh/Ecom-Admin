import React from 'react'
import { FaHome,FaPeopleArrows,FaProductHunt } from 'react-icons/fa'
import { BiCategory} from 'react-icons/bi'
import { HiOutlineShoppingBag} from 'react-icons/hi'
import { FiSettings} from 'react-icons/fi'
import { Link } from 'react-router-dom'


export const SideMenu = () => {
  return (
    <div className='side-nav'>
      <div className='menu-design'> MENU </div>
      <div className='icons'>
          <div>
            <Link to={'/'}> <FaHome /> </Link> 
            <Link to={'/users'}> <FaPeopleArrows /> </Link> 
            <Link to={'/category'}> <BiCategory /> </Link> 
            <Link to={'/products'}> <FaProductHunt /> </Link> 
            <Link to={'/orders'}> <HiOutlineShoppingBag /> </Link> 
          </div>

          <div>
            <Link to={'/setting'}> <FiSettings /> </Link> 
          </div>
      </div>
    </div>
  )
}
