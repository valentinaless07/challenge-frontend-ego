import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './styles/Model.module.css'

const Model = ({model}) => {

  const navigate = useNavigate()

  const toFicha = () => {
    navigate(`/ficha/${model.id}`)
  }

  return (
    <div className={styles.model_container}>
        <div className={styles.name_year}>
            <h2 onClick={toFicha}>{model.name}</h2>
            <p>{`${model.year} | $${model.price}`}</p>  
        </div>
       <div className={styles.img_container}>
        <img onClick={toFicha} className={styles.model_photo} src={model.photo} alt={`${model.photo}-photo`} />
       </div>
    </div>
  )
}

export default Model