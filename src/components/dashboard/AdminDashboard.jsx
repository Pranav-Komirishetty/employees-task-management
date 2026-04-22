import React from 'react'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask'
import AllTasks from '../others/AllTasks'


const AdminDashboard = () => {
  return (
    <div className='bg-[#111] h-screen w-screen p-10 pt-5'>
        <Header/>
        <CreateTask/>
        <AllTasks/>
    </div>
  )
}

export default AdminDashboard
