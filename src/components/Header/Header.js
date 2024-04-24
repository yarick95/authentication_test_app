import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/auth/AuthProvider'
import styles from './Header.module.scss'
import { LogoutIcon } from '../../svg/AllSvg.jsx'

function Header() {

  const {logOut} = useContext(AuthContext)
  return (
    <div className={styles.container}>

      <nav>
          <Link to="/">Home</Link>
          <Link to="/orders">Orders</Link>
          <Link to="/auth">Login</Link>
      </nav>

    <button className={styles.logoutBtn} onClick={logOut}><LogoutIcon/><span>Log out</span> </button>
    </div>
  )
}

export default Header