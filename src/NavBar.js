import { Button, Avatar } from '@material-ui/core'
import {
  AssignmentIndOutlined,
  BorderAllRounded,
  Home,
  NotificationsOutlined,
  PeopleAltOutlined,
  Search,
  Language,
} from '@material-ui/icons'
import React from 'react'
import './NavBar.css'

function NavBar() {
  return (
    <div className="navbar">
      <div className="qHeader_logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/91/Quora_logo_2015.svg"
          alt="quora"
        ></img>
      </div>
      <div className="qHeader_icons">
        <div className="qHeader_icon">
          <Home />
        </div>
        <div className="qHeader_icon">
          <BorderAllRounded />
        </div>
        <div className="qHeader_icon">
          <AssignmentIndOutlined />
        </div>
        <div className="qHeader_icon">
          <PeopleAltOutlined />
        </div>
        <div className="qHeader_icon">
          <NotificationsOutlined />
        </div>
      </div>
      <div className="qHeader_input">
        <input type="text" placeholder="검색어를 입력하세요"></input>
        <Search />
      </div>
      <div className="qHeader_Rem">
        <div className="qHeader_avatar">
          <Avatar />
        </div>
        <Language />
        <Button>질문하기</Button>
      </div>
    </div>
  )
}

export default NavBar
