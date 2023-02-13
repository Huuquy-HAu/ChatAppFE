import React from 'react'
import {PlusCircleOutlined } from "@ant-design/icons"
function ChatMain() {
  return (
    <div className='chatMain'>
      <div className='chatMain-top'>
        <div className='chatMain-top-left'>
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTavONlrqeMyP2frM69zYo8jHXpMhJhoW-WOw&usqp=CAU" alt="" />
         <div className='chatMain-top-left-text'><span>Name</span></div>
        </div>
        <div className='chatMain-top-right'>
         <i class="fa-solid fa-ellipsis"></i>
        </div>
      </div>
      <div className='chatMain-main'>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
      </div>
      <div className='chatMain-bot'>
        <div className='chatMain-bot-icon'>
           <i class="fa-regular fa-image"></i>
           <div><PlusCircleOutlined /></div>
        </div>
        <div className='chatMain-bot-iput'>
          <input type="text" placeholder='Aa'/>
          <i class="fa-regular fa-face-smile-beam"></i>
        </div>
        <div><i class="fa-regular fa-thumbs-up"></i></div>
      </div>
    </div>
  )
}

export default ChatMain