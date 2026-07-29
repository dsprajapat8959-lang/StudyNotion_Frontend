import React, { useEffect, useState } from 'react'
import { NavbarLinks } from '../../data/navbar-links'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import logo from "../../assets/Logo/Logo-Full-Light.png"
import { matchPath } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { MdShoppingCart } from "react-icons/md";
import { apiConnector } from '../../services/apiconnector'
import { categoryEndpoints } from '../../services/apis'
import { IoIosArrowDown } from "react-icons/io";
import { logout } from '../../services/operations/auth'



const Navbar = () => {

    const {totalItems} = useSelector((state)=> state.cart);
    const {token} = useSelector((state)=> state.auth);
    const {user} = useSelector((state)=> state.profile);
    const [sublinks, setSublinks] = useState([]);
    const [drop, setDrop] = useState(false);
    

    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const matchRoutes = (route)=>{
        return matchPath({path:route}, location.pathname);
    }

    const fetchCategories = async() => {
        try {
            const result = await apiConnector("GET", categoryEndpoints.GET_ALL_CATEGORY_API );
            setSublinks(result.data.data);
        } catch (error) {
            console.log("Error occured while fethcing categories: ", error)
            
        }
       
    }

    const dropDownHandler = (e)=>{
        e.stopPropagation();
        setDrop(prev => !prev);
    }

    useEffect(()=>{
        fetchCategories();
        // console.log(user);
    }, [])

  return (
    <div className='flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700'>
      <div className='flex w-11/12 max-w-maxContent justify-between items-center'>
        <Link to="/">
            <img src={logo} alt="StudyNotion logo" height={42} width={160}/>
        </Link>

        <nav>
            <ul className='flex gap-x-6 text-richblack-25'>
                {NavbarLinks.map((link,index)=>(
                    <li key={index} className={link.title === "Catalog" ? "relative group" : ""}>
                        {
                            link.title === "Catalog"? (
                            <div className='inline-flex items-center gap-2 cursor-pointer'>
                                <p>{link.title}</p>
                                <IoIosArrowDown/>
                                <div className='absolute left-0 top-full z-50 hidden min-w-[240px] mt-2 flex-col rounded-md bg-richblack-5 p-4 text-richblack-900 opacity-0 shadow-lg transition-all duration-200 group-hover:flex group-hover:opacity-100'>
                                {
                                    sublinks?.length > 0 && (
                                        sublinks.map((sublink, index)=>(
                                            <Link key={index} to={`catelog/${sublink.name.split(" ").join("-").toLowerCase()}`}>
                                                <div className='rounded px-3 py-2 text-[16px] hover:bg-richblack-400'>
                                                    {sublink.name}
                                                </div>                                            
                                            </Link>
                                        ))
                                    )
                                }    
                                
                                </div>
                                <div className='hidden group-hover:block absolute left-[62px] top-full z-40 h-4 w-4 -translate-y-0.1  rotate-45 bg-richblack-5'></div>

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
          user && user?.type !== "Instructor" && (
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
        {
            token !== null && (
                <div className='relative flex flex-row items-center mr-16 gap-1' onClick={dropDownHandler}>
                    <img src={user.image} alt={`${user.firstName} profile`} className='h-8 w-8 rounded-full object-cover' />
                    <IoIosArrowDown fontSize={18} className='text-richblack-25 h-5 w-5' />

                    {drop && (
                        <div className='absolute  top-full -right-9 z-50 mt-2 min-w-[180px] overflow-hidden rounded-lg border border-richblack-700 bg-richblack-900 shadow-[0_10px_30px_rgba(0,0,0,0.35)]'>
                            <Link
                                to='/dashboard/my-profile'
                                onClick={() => setDrop(false)}
                                className='block px-4 py-3 text-sm text-richblack-5 hover:bg-richblack-800'
                            >
                                Dashboard
                            </Link>
                            <button
                                type='button'
                                onClick={() => {setDrop(false); dispatch(logout(navigate))}}
                                className='w-full px-4 py-3 text-left text-sm text-richblack-5 hover:bg-richblack-800'
                            >
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            )
        }
      </div>
    </div>
  )
}

export default Navbar
