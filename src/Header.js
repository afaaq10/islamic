import React, { useState } from 'react'
import VideoCallIcon from '@mui/icons-material/VideoCall';
import MenuIcon from '@mui/icons-material/Menu';
import youtube from './youtube.svg'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PersonIcon from '@mui/icons-material/Person';
import './Header.css'
import { Link } from "react-router-dom"



const Header = () => {


    const [inputSearch, setinputSearch] = useState("")

    return (
        <div className="header">

            <div className="header__left">
                <MenuIcon />
                <Link to="/islamic" >

                    <img className="header__logo" src={youtube} alt="" />
                </Link>

            </div>


            <div className="header__input">
                <input type="text" onChange={(e) => setinputSearch(e.target.value)} value={inputSearch} placeholder='Search' />

                <Link to={`/islamic/search/${inputSearch}`} className='input__button'>
                    <SearchIcon />
                </Link>

            </div>

            <div className="header__icons">
                <VideoCallIcon className="header__icon" />
                <NotificationsNoneIcon className="header__icon" />
                <PersonIcon className="header__icon" />
            </div>


        </div>
    )
}

export default Header