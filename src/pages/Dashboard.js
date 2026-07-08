import React from 'react'
import Sidebar from '../components/core/Dashboard/Sidebar'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='flex flex-row '>
      <Sidebar/>
      <Outlet/>
    </div>
  )
}

export default Dashboard
