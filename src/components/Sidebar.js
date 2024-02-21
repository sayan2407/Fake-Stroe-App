import React from 'react'
import SignIn from './forms/SignIn'
import SignUp from './forms/SignUp'
import { useAppContext } from '../context/AppProvider'

const Sidebar = ({isSignInForm}) => {
    const {setIsSideBarOpen, setSignInOpen} = useAppContext();
    const onClose = () => {
        setIsSideBarOpen(false);
        setSignInOpen(false);
    }
  return (
    <div className='sidebar open'>
    <button className="close-btn" onClick={onClose}>Close</button>
    
      <div>
        {
            (isSignInForm) ? (
                <SignIn/>
            ) : (
                <SignUp/>
            )
        }
      </div>

   </div>
  )
}

export default Sidebar