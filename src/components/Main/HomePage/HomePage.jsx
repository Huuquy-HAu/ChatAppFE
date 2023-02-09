import React from 'react'
import Menu from "../Componem/Menu"

import ChatMain from '../Componem/ChatMain'
import Infor from '../Componem/Infor'
import  "./HomePage.css"
import { Outlet } from 'react-router'
function HomePage() {
  return (
    <div className='homePage'>
        <Menu></Menu>
        <div className='homePage-right'>
        <Outlet></Outlet>
        <ChatMain></ChatMain>
        <Infor></Infor>
        </div>
    </div>
  )
}

export default HomePage