import React, { useState } from 'react'
import fill from '../../assets/fill-1.svg'
import Model from './Model'
import styles from './styles/Models.module.css'

const Models = ({models, filterModels}) => {

  const [active, setActive] = useState('reset')


  const handleSegment = (param) => {

    filterModels({
      segment: param,
      ordering: ''
    })
    setActive(param)
  }

  const handleOrdering = (param) => {
    filterModels({
      segment: '',
      ordering: param
    })
  }

  return (
    <div>
        <div className={styles.filters}>
            <div className={`dropdown ${styles.select_container}`}>
                <button  id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Filtrar por
                </button>
                <div className={styles.filter_elements}>
                  <span className={active === 'reset' ? styles.element_active : ''} onClick={() => handleSegment('reset')}>Todos</span>
                  <span className={active === '1' ? styles.element_active : ''} onClick={() => handleSegment('1')}>Sedan</span>
                  <span className={active === '2' ? styles.element_active : ''} onClick={() => handleSegment('2')}>Hatchback</span>
                  <span className={active === '3' ? styles.element_active : ''} onClick={() => handleSegment('3')}>SUVs y Crossovers</span>
                </div>
                <img className={styles.filter_icon} src={fill} alt="fill" />
                <div className={`dropdown-menu ${styles.dropdown_menu} ${styles.dropdown_menu_filter}`} aria-labelledby="dropdownMenuButton">
                <span onClick={() => handleSegment('reset')} className={`dropdown-item py-3 ${styles.dropdown_item}`}>Todos</span>
                 <span onClick={() => handleSegment('1')} className={`dropdown-item py-3 ${styles.dropdown_item}`}>Sedan</span>
                 <span onClick={() => handleSegment('2')} className={`dropdown-item py-3 ${styles.dropdown_item}`}>Hatchback</span>
                <span onClick={() => handleSegment('3')} className={`dropdown-item py-3 ${styles.dropdown_item}`}>Pickups y Comerciales</span>
                <span onClick={() => handleSegment('4')} className="dropdown-item py-3" >SUVs y Crossovers</span>
                </div>
            </div>

            <div className={`dropdown ${styles.select_container}`}>
                <button className={styles.ordenar_button} id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Ordenar por
                </button>
                <img src={fill} alt="fill" />
                <div className={`dropdown-menu ${styles.dropdown_menu}`} aria-labelledby="dropdownMenuButton">
                <span onClick={() => handleOrdering('')} className={`dropdown-item py-3 ${styles.dropdown_item}`}>Nada</span>
                 <span onClick={() => handleOrdering('price')} className={`dropdown-item py-3 ${styles.dropdown_item}`}>De <span  className={styles.option_semibold}>menor</span> a <span className={styles.option_semibold}>mayor</span> precio</span>
                <span onClick={() => handleOrdering('-price')} className={`dropdown-item py-3 ${styles.dropdown_item}`}>De <span className={styles.option_semibold}>mayor</span> a <span className={styles.option_semibold}>menor</span> precio</span>
                <span onClick={() => handleOrdering('year')}  className={`dropdown-item py-3 ${styles.dropdown_item}`}>Más <span className={styles.option_semibold}>nuevos</span> primero</span>
                <span onClick={() => handleOrdering('-year')} className="dropdown-item py-3" >Más <span className={styles.option_semibold}>viejos</span> primero</span>
                </div>
            </div>
        </div>
        





        <div className={styles.models_container}>

        {
            // Llamo al componente model por cada elemento del array models
            models?.length > 0 && models.map(model => <Model model={model} key={model.id}/>)
        }

        </div>

     
       
    </div>
  )
}

export default Models