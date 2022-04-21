import React from 'react'
import fill from '../../assets/fill-1.svg'
import styles from './styles/Models.module.css'

const Models = () => {
  return (
    <div>
        <div className={styles.filters}>
            <div>
                <select defaultValue={'1'}>
                    <option disabled value={'1'}>Filtrar por</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                </select>
                <img src={fill} alt="fill" />
            </div>

            <div>
                <select defaultValue={'1'}>
                    <option disabled value={'1'}>Ordenar por</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                </select>
                <img src={fill} alt="fill" />
            </div>
            <div></div>
        </div>
       
    </div>
  )
}

export default Models