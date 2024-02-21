import React from 'react'
import { useAppContext } from '../context/AppProvider'
import Sidebar from '../components/Sidebar';

const Home = () => {
  const {isSideBarOpen, signInOpen} = useAppContext();
  console.log('signInOpen ', signInOpen);
  return (
    <div>
        <div>
            <img src="/assets/images/hero.jpg" width="100%" height={700}/>
        </div>

        {
          (isSideBarOpen) ? (
            <Sidebar isSignInForm = {signInOpen}/>
          ) : (
            ''
          )
        }

    </div>
  )
}

export default Home