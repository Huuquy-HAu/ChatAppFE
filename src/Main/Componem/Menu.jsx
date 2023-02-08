import React from 'react'

function Menu() {
  return (
    <div className='menu'>
        <div className='menu-top'>
          <ul>
            <li><a href="#showAll"><i class="fa-solid fa-comments"></i></a></li>
            <li><a href="#showAll"><i class="fa-solid fa-user-group"></i></a></li>
            <li><a href="#showAll"><i class="fa-regular fa-comment-dots"></i></a></li>
          </ul>
        </div>
        <div className='menu-bot'>
        <ul>
            <li><a href="#showAll"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2NhI8N6r4uMLZQu-cgx6ST0kmx3yyYT1WCQ&usqp=CAU" alt="" /></a></li>
            <li><a href="#showAll"><i class="fa-solid fa-right-from-bracket"></i></a></li>
            
          </ul>
        </div>
    </div>
  )
}

export default Menu