/**
 * 
 * @param {{data: {name: string, id}}} props
 */

import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const Header = () => {

  const { loggedInUser } = useContext(AuthContext)

  return (
    <div className='flex items-center justify-between text-white mb-5'>
        <h1 className='text-2xl font-bold'>Hello! <br></br> <span className='text-3xl font-extrabold'>{loggedInUser.userData.name} 👋</span></h1>
        <button className='px-5 py-2 font-medium bg-red-500 rounded cursor-pointer active:scale-97' 
        onClick={()=>{
          localStorage.removeItem('userData')
          window.location.reload();
        }}
        >Logout</button>
    </div>
  )
}

export default Header
