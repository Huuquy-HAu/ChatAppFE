import React from 'react'
import Menu from '../Componem/Menu'
import ShowAll from '../Componem/ShowAll'
import ChatMain from '../Componem/ChatMain'
import Infor from '../Componem/Infor'
import  "./HomePage.css"
function HomePage() {
  return (
    <div>
        <Menu></Menu>
        <ShowAll></ShowAll>
        <ChatMain></ChatMain>
        <Infor></Infor>
    </div>
  )
}

export default HomePage