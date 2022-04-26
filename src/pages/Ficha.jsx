import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Nav from '../components/Nav'
import styles from './styles/Ficha.module.css'
import arrowLeft from '../../assets/arrow-left.svg'
import arrowRight from '../../assets/arrow-right.svg'
import FeatureCard from '../components/FeatureCard'
import HighlightCard from '../components/HighlightCard'


const Ficha = () => {

    const [detail, setDetail] = useState({})
    
    const params = useParams()

    

    useEffect(() => {
        
        const getDetail = async () => {
            const {data} = await axios(`https://challenge.agenciaego.tech/api/models/${params.id}`)
            setDetail(data)

        }

        getDetail()

       

    
    }, [])
    
    const parseText = (data) => {
        const parser = new DOMParser()

        const desc = parser.parseFromString(data, 'text/html');
        return desc.body.firstChild.textContent
    }


    


  return (
    <>
    <Nav/>
    {
        detail.title ? 
        <div className={styles.detail_container}>
          <div className={styles.img_info_container}>
            <img className={styles.photo} src={detail.photo} alt="car-photo" />

            <div className={styles.info_container}>
            <div className={styles.name_container}>
            <p className={styles.name}>{detail.name}</p>
            </div>

            <div className={styles.title_container}>
                <h2>
                    {detail.title}
                </h2>
            </div>

            <div className={styles.description_container}>
                <p>
                {parseText(detail.description)}
                </p>
            </div>
            </div>
            </div>

            <div className={styles.features}>

            
           
            <div className={styles.section} id='section1'>
                
            <FeatureCard size={''} image={detail.model_features[0].image} title={detail.model_features[0].name} description={detail.model_features[0].description}/>
            <FeatureCard size={'features_card_s'} image={detail.model_features[1].image} title={detail.model_features[1].name} description={detail.model_features[1].description}/>
                <a  href='#section2' className={`${styles.arrow_right} ${styles.arrow}`}>
                <img src={arrowRight} alt="" />
                </a>
            </div>
            <div className={styles.section} id='section2'>
                <a href='#section1' className={`${styles.arrow_left} ${styles.arrow}`}>
                 <img src={arrowLeft} alt="" />
                </a>
            <FeatureCard size={''} image={detail.model_features[1].image} title={detail.model_features[1].name} description={detail.model_features[1].description}/>
            <FeatureCard size={'features_card_s'} image={detail.model_features[0].image} title={detail.model_features[0].name} description={detail.model_features[0].description}/>
                
            </div>
            


            </div>

            <div className={styles.highlights}>
              {detail.model_highlights.map(el => <HighlightCard title={el.title} image={el.image} content={parseText(el.content)}/>)}
            </div>
            <footer className={styles.footer}></footer>
        </div> : 
        
        <div className={styles.spinner_container}>
            <div className={styles.spinner}></div>
        </div>
    }
    </> 
  )
}

export default Ficha