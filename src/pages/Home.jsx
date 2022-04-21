import React from 'react'
import Models from '../components/Models'
import Nav from '../components/Nav'
import styles from './styles/Home.module.css'

const Home = () => {
  return (
    <>
        <Nav/>
        <div className={styles.h1_container}>
        <h1>Descubrí todos los modelos</h1>
        <Models/>
        </div>
    </>
  )
}

export default Home