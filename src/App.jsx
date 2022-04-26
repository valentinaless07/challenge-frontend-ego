import Home from "./pages/Home"
import axios from "axios"
import { useEffect, useState } from "react"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Ficha from "./pages/Ficha"



function App() {

  // State de los modelos
  const [models, setModels] = useState([])

  // State con una copia de los modelos
  const [copyModels, setCopyModels] = useState([])

  // State con la configuración de los filters
  const [filterConfig, setFilterConfig] = useState({
    ordering: '',
    segment: ''
  })
    
  const getModels = async () => {

    // Petición de los modelos a la ruta
      const {data} = await axios('https://challenge.agenciaego.tech/api/models/')

      // Guardo los modelos en los states
      setModels(data)
      setCopyModels(data)

  }   

  const filterModels = async (config) => {
    // Caso en el que se filtre por todos o por ningún ordenamiento y se quiera mantener el otro parámetro
    if(config.segment === 'reset' || config.ordering === 'reset'){

      const {data} = await axios(`https://challenge.agenciaego.tech/api/models/?ordering=${config.ordering === 'reset' ? '' : filterConfig.ordering}&segment=${config.segment === 'reset' ? '' : filterConfig.segment}`)
      setFilterConfig({
        segment: config.segment === 'reset' ? '' : filterConfig.segment,
        ordering: config.ordering === 'reset' ? '' : filterConfig.ordering
      })
      setModels(data)

      return
    }

    //  Llamada a la api cuando recibe filtros u ordenamiento
    
    const url = `https://challenge.agenciaego.tech/api/models/?ordering=${config.ordering ? config.ordering : filterConfig.ordering}&segment=${config.segment ? config.segment : filterConfig.segment}`
    setFilterConfig({
      ordering: config.ordering ? config.ordering : filterConfig.ordering,
      segment: config.segment ? config.segment : filterConfig.segment
    })
    
    const {data} = await axios(url)

    setModels(data)
  }


  useEffect(() => {
    // Ejecuto la función al montar el componente
    getModels()
    
  }, [])
  
  

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/ficha/:id" element={<Ficha/>}/>
         <Route path="*" element={<Home models={models} filterModels={filterModels}/>}/>
        </Routes>
      

      </BrowserRouter>
  )
}

export default App
