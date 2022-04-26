import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import bars from "../../assets/gray.svg";
import styles from "./styles/Nav.module.css";
import close from '../../assets/close.svg'
import { Link } from "react-router-dom";

const Nav = () => {

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };


  return (
    <>
       <nav>
      <Link to={'/'}><img src={logo} alt="ego-logo" /></Link>

      <div>
        <span>Menú</span>
      <img src={bars} alt="bars"  onClick={handleClick}/>
      </div>
     
    

    </nav>
    <header className={styles.header}>
      <div className={`${styles.dark_header} ${open ? styles.opendarkmenu : styles.closedarkmenu}`}>

      </div>

      <div className={`${styles.menu} ${open ? styles.openmenu : styles.closemenu}`}>
        <div className={styles.close_container}>
        <span onClick={handleClick}>
        Cerrar
        </span>  
        <img onClick={handleClick} src={close} alt="x" />
        </div>
        <div className={styles.menu_elements}>
          <span>Modelos</span>
          <span>Servicios y Accesorios</span>
          <span>Financiación</span>
          <span>Reviews y Comunidad</span>
        </div>
        <div className={styles.menu_elements}>
          <span>Toyota Mobility Service</span>
          <span>Toyota Gazoo Racing</span>
          <span>Toyota Híbridos</span>
        </div>
        <div className={styles.menu_elements}>
          <span>Concesionarios</span>
          <span>Test Drive</span>
          <span>Contacto</span>
        </div>
        <div className={styles.last_menu_elements}>
          <span>Actividades</span>
          <span>Servicios al Cliente</span>
          <span>Ventas Especiales</span>
          <span>Innovación</span>
          <span>Prensa</span>
          <span>Acerca de...</span>
        </div>

      </div>

    </header>
    </>
 
  );
};

export default Nav;
