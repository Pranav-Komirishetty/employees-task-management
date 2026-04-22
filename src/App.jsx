import React, { useContext, useEffect, useState } from 'react'
import Login from './components/auth/Login'
import EmployeeDashboard from './components/dashboard/EmployeeDashboard'
import AdminDashboard from './components/dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import AuthProvider, { AuthContext } from './context/AuthProvider'

const App = () => {
  const [userData, setUserData] = useState(null)
  const [allUsers, setAllUsers] = useState([])

  const {empsData, adminsData, loggedInUser, setLoggedInUser} = useContext(AuthContext)

  useEffect(() =>{
    if(empsData && adminsData){
      getAllUsers()
    }
    if(loggedInUser){
      setUserData(loggedInUser)
    }
  }, [empsData])

  const handleLogin = (email, password) => {

    if(adminsData && 'admin@team.com' == email && '123' == password){
      const userData = {role :'admin', userData: adminsData}
      setLoggedInUser(userData)
      setUserData(userData)
    }
    else if(empsData){
      const employee = empsData.find((e) => e.email == email && e.password == password)
      const userData = {role: 'employee', userData: employee}
      setLoggedInUser(userData)
      setUserData(userData)
    }
    else {
      alert('invalid creds')
    }
  }

  const getAllUsers = () =>{
    let allUsers = []
    const usersData = getLocalStorage()
    allUsers.push(usersData.admins.email)

    usersData.employees.forEach((ele) =>{
      return allUsers.push(ele.email)
    })
    setAllUsers(allUsers)
  }
  

  return (
   <>
   {!userData && <Login handleLogin={handleLogin} users={allUsers} />}
   {userData && userData.role == 'employee' && <EmployeeDashboard/>}
   {userData && userData.role == 'admin' && <AdminDashboard/>}
   </>
  )
}

export default App
