import React from 'react'
import './Profile.css'
import { Button, Modal } from 'antd';
import { useState } from 'react';

function Profile() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='Profile'>
      <h1 className="textProfile">Thông tin tài khoản</h1>
      <div className="mainContent">
        <div className="profileContent">
          <img src="https://genshin.honeyhunterworld.com/img/shougun_052.webp" alt="" />
        </div>
          <h3>Nguyễn Trường Thọ</h3>
        <div className="profileCart">
            <p><i class="fa-regular fa-envelope"></i><span>truongtho12092000@gmail.com</span></p>
            <p><i class="fa-solid fa-phone"></i><span>0339951231</span></p>
            <p><i class="fa-solid fa-location-dot"></i><span>Hà Nội</span></p>
            <p><i class="fa-solid fa-person-half-dress"></i><span>Nam</span></p>
        </div>
        <div className="settingBtn">
          <Button type="primary" onClick={showModal}>
            Chỉnh sửa thông tin tài khoản
          </Button>
          <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <table className='updateProfile'>
              <tr>
                <td><p>Họ và tên : </p></td>
                <td><input type="text" /></td>
              </tr>
              <tr>
                <td><p>Email : </p></td>
                <td><input type="text" /></td>
              </tr>
              <tr>
                <td><p>Số điện thoại : </p></td>
                <td><input type="text" /></td>
              </tr>
              <tr>
                <td><p>Địa chỉ : </p></td>
                <td><input type="text" /></td>
              </tr>
              <tr>
                <td><p>Giới tính :  </p></td>
                <td>Nam<input type="radio" name='sex'/> Nữ <input type="radio" name="sex" /></td>
              </tr>
            </table>
            
            
            
            
            
          </Modal>
        </div>
      </div>
    </div>
  )
}

export default Profile