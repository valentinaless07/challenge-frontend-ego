import React from 'react'
import logo from '../../assets/logo.svg'
import bars from '../../assets/gray.svg'
import styles from './styles/Nav.module.css'

const Nav = () => {
  return (
    <nav>
        <img src={logo} alt="ego-logo" />
        <img src={bars} alt="bars" />
    </nav>
  )
}

export default Nav