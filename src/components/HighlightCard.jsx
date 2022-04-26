import React from 'react'
import styles from './styles/HighlightCard.module.css'

const HighlightCard = ({title, content, image}) => {
  return (
    <div className={styles.highlight_card}>
        <img src={image} alt="" />
        <div>

        <h3>{title}</h3>
        <p>{content}</p>
        </div>
    </div>
  )
}

export default HighlightCard