import React from 'react'
import styles from './styles/FeatureCard.module.css'

const FeatureCard = ({image, title, description, size}) => {
  return (
    <div className={`${styles.feature_card} ${size && styles[size]}`}>
        <img src={image} alt="" />
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
  )
}

export default FeatureCard