import React, { useState,useRef  } from 'react'
import {PlusCircleOutlined } from "@ant-design/icons"
import Picker from '@emoji-mart/react'
import data from '@emoji-mart/data'
function ChatMain() {
  const [show,setShow] = useState(false)
  const [controlerEM,setControlerEM] = useState(false)
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const dataCHat = [1,2,3,4,5]
  const [dataClone,setDataClone] = useState(dataCHat)
  const inputElement = useRef();
  function showEM (){
    setControlerEM(true)
  }
  function clickEmoj (even){
    setDataClone([...dataClone,even.native])
    setControlerEM(false)
  }
  function updateScroll (){
    var element = document.querySelector(".chatMain-main");
    console.log(element.scrollHeight );
    element.scrollTop = element.scrollHeight;
  }
  function chat (e){
  if(e.keyCode === 13){
    setDataClone([...dataClone,inputElement.current.value])
    inputElement.current.value = ""
    inputElement.current.focus()
  }
  }
  function showInfor (){
    let taget = document.querySelector(".homePage-right")
    let target =document.querySelector(".infor")
    if(show === false){
      taget.setAttribute("style"," grid-template-columns : 30% auto 20%")
      target.setAttribute("style"," display: block;")
      setShow(true)
    }
    if(show === true){
      taget.setAttribute("style"," grid-template-columns : 30% auto ")
      target.setAttribute("style"," display: none;")
      setShow(false)
    }
  }
  return (
    <div className='chatMain' >
      <div className='chatMain-top'>
        <div className='chatMain-top-left'>
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTavONlrqeMyP2frM69zYo8jHXpMhJhoW-WOw&usqp=CAU" alt="" />
         <div className='chatMain-top-left-text'><span>Name</span></div>
        </div>
        <div className='chatMain-top-right' onClick={showInfor}>
         <i class="fa-solid fa-ellipsis"></i>
        </div>
      </div>
      <div className='chatMain-main' onClick={()=> setControlerEM(false)} >
          {
            dataClone.map((value,index)=> <p key={index}>{value}</p>)
          }
      </div>
      <div className='chatMain-bot'>
        <div className='chatMain-bot-icon'>
           <i className="fa-regular fa-image"></i>
           <div><PlusCircleOutlined /></div>
        </div>
        <div className='chatMain-bot-iput'>
          <input type="text" placeholder='Aa' onKeyUp={chat} ref={inputElement} onChange={updateScroll}/>
          <div className='chatMain-bot-iput-emoj'>
              <i className="fa-regular fa-face-smile-beam" onClick={showEM}></i>
              {controlerEM ? <div className='emoj'><Picker  data={data} onEmojiSelect = {clickEmoj}/></div>:""}
          </div>
        </div>
        <div ><i className="fa-regular fa-thumbs-up"></i>
        
        </div>
      </div>
    </div>
  )
}

export default ChatMain