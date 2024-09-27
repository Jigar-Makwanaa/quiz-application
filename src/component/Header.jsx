import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <header>
                <div className="container">
                    <div className="row">
                        <div className="main">
                            <div className="menu">
                                <ul className='flex'>
                                    <li>
                                        <Link to={'/'}><i class="fa-solid fa-house"></i></Link>
                                    </li>
                                    <li>
                                        <Link to={'/quiz'}><i class="fa-solid fa-circle-play"></i></Link>
                                    </li>
                                    <li>
                                        <i class="fa-solid fa-user"></i>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header