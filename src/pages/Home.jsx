import React, { useEffect, useState } from 'react'
import Models from '../components/Models'
import Nav from '../components/Nav'
import styles from './styles/Home.module.css'

const Home = ({models, filterModels}) => {



 
  


  return (
    <>
        <Nav/>
        <div className={styles.h1_models_container}>
        <h1>Descubrí todos los modelos</h1>
        <Models models={models} filterModels={filterModels}/>
        <footer className={styles.footer}></footer>
        </div>






    </>
  )
}

export default Home