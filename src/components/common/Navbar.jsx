import React from 'react'
import { NavbarLinks } from '../../data/navbar-links'
import { Link, useLocation } from 'react-router-dom'
import logo from "../../assets/Logo/Logo-Full-Light.png"
import { matchPath } from 'react-router-dom'

const Navbar = () => {

    const location = useLocation();

    const matchRoutes = (route)=>{
        return matchPath({path:route}, location.pathname);
    }

  return (
    <div className='flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700'>
      <div className='flex w-11/12 max-w-maxContent justify-between items-center'>
        <Link to="/">
            <img src={logo} height={42} width={160}/>
        </Link>

        <nav>
            <ul className='flex gap-x-6 text-richblack-25'>
                {NavbarLinks.map((link,index)=>(
                    <li key={index}>
                        {
                            link.title === "Catalog"? (<div></div>) : (
                                <Link to={link?.path}>
                                    <p className={`${matchRoutes(link?.path)? "text-yellow-25": "text-richblack-25"}`}>{link.title}</p>
                                </Link>
                            )
                        }
                    </li>
                ))}
            </ul>
        </nav>

        <div className='flex gap-x-4 items-center'>
                
        </div>
      </div>
    </div>
  )
}

export default Navbar
