import React from 'react'
import Header from '../others/Header'
import TaskListNumber from '../others/TaskListNumber'
import TaskList from '../taskList/TaskList'

const EmployeeDashboard = () => {
  return (
    <div className='bg-[#1C1C1C] h-screen w-screen p-10'>
        <Header/>
        <TaskListNumber/>
        <TaskList/>
    </div>
  )
}

export default EmployeeDashboard
