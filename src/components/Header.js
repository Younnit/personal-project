import React, { useState, useContext } from 'react'
import './css/Header.css'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import courtFinder from '../images/courtFinder.png'

function Header(props) {
  const [toggle, setToggle] = useState(true)
  const [namer, setNamer] = useState('')
  const { user, handleLogout } = useContext(UserContext)

  const giveName = (props) => {
    setToggle(!toggle)
    if (toggle === true) {
      setNamer('show')
    } else {
      setNamer('')
    }
  }

  const setAside = () => {
    giveName()
    handleLogout()
  }

  return (
    <div className="header">
      <h1>
        <Link to="/" id="logo">
          <img src={courtFinder} alt="Logo" />
        </Link>
      </h1>
      <nav>
        <div className="cart-and-stuff">
          {user && <h3 id="homepage">Hello, {user.username}</h3>}
          {!user && (
            <Link to="/auth">
              <button id="signInBtn">Log in | Register</button>
            </Link>
          )}
          <div className={`hamburger ${namer}`} onClick={giveName}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
        <div className={`${namer} mini-menu`}>
          <div
            className={`hamburger self-aligner-hamburger`}
            onClick={giveName}
          >
            <div className="bar top-x"></div>
            <div className="bar bottom-x"></div>
          </div>
          <ul>
            <li>
              <Link id="link" to="/" onClick={giveName}>
                Home
              </Link>
            </li>
            <li>
              <Link id="link" to="/map" onClick={giveName}>
                Map
              </Link>
            </li>
            <li>
              <Link id="link" to="/contact" onClick={giveName}>
                Contact
              </Link>
            </li>
          </ul>
          {!user && (
            <ul>
              <li id="self-aligner-login">
                <Link to="/auth" onClick={giveName}>
                  Login | Register
                </Link>
              </li>
            </ul>
          )}
          {user && (
            <ul>
              <li id="self-aligner-login">
                <Link to="/" onClick={setAside}>
                  Logout
                </Link>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </div>
  )
}

export default Header
