import React from 'react';
import style from './NavButton.module.css';
import { motion } from "framer-motion"

const NavButton = ({value, way, active}) => {

  return (
    <motion.div
      className={style.link + ' ' + (active && style.active)}
      whileTap={{ scale: 0.97 }}
      whileHover={{ scale: 1.03 }}
    >
      <span>{ value }</span>
    </motion.div>
  )
}

export default NavButton;
