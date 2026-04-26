import React, { useEffect, useState } from 'react'
import { NavbarLinks } from '../../data/navbar-links'
import { Link, useLocation } from 'react-router-dom'
import logo from "../../assets/Logo/Logo-Full-Light.png"
import { matchPath } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { MdShoppingCart } from "react-icons/md";
import { apiConnector } from '../../services/apiconnector'
import { categories } from '../../services/apis'
import { IoIosArrowDown } from "react-icons/io";


const Navbar = () => {

    const {totalItems} = useSelector((state)=> state.cart);
    const {token} = useSelector((state)=> state.auth);
    const {profile} = useSelector((state)=> state.profile);
    const [sublinks, setSublinks] = useState([]);

    const location = useLocation();

    const matchRoutes = (route)=>{
        return matchPath({path:route}, location.pathname);
    }

    const fetchCategories = async() => {
        try {
            const result = await apiConnector("GET", categories.CATEGORIES_API );
            console.log(result);
            setSublinks(result.data.data);
        } catch (error) {
            console.log("Error occured while fethcing categories: ", error)
            
        }
       
    }

    useEffect(()=>{
        fetchCategories();
    }, [])

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
                            link.title === "Catalog"? (
                            <div className='relative flex items-center gap-2 group'>
                                <p>{link.title}</p>
                                <IoIosArrowDown/>
                                <div className='translate-x-[-50%] translate-y-[80%]
                                invisible absolute left-[50%] top-[50%] flex flex-col rounded-md bg-richblack-5 p-4 text-richblack-900 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 w-[300px]'>
                                {
                                    sublinks?.length > 0 && (
                                        sublinks.map((sublink, index)=>(
                                            <Link key={index} to={sublink.link}>
                                                <div>{sublink.title}</div>                                            
                                            </Link>
                                        ))
                                    )
                                }    
                                
                                </div>
                            <div className='invisible opacity-0  transition-all duration-200 group-hover:opacity-100 absolute left-[50%] top-0 translate-y-[110%] translate-x-[80%] h-6 w-6 rotate-45 rounded bg-richblack-5 group-hover:visible '></div>

                            </div>) : (
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

      {/* Login/Signup/Dashboard */}
      <div className='flex flex-row gap-5 '>
        {
          profile && profile?.type !== "Instructor" && (
            <Link to="/dashboard/cart" className='relative'>
                <MdShoppingCart/>
               { 
               totalItems > 0 &&(
                <span className='absolute'>
                    {totalItems}
                </span>
                )}
            </Link>
          )
        }
        {
            token === null && (
                    <Link to="/login">
                        <button className='border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 rounded-md whitespace-nowrap'>
                            Log in
                            </button>
                    </Link>
                   
            )
        }
        {
            token === null && (
                 <Link to="/signup">
                        <button className='border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 rounded-md whitespace-nowrap'>
                            Sign up
                            </button>
                    </Link>
            )
        }
      </div>
    </div>
  )
}

export default Navbar
