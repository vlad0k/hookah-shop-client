import React, {useState} from 'react'
import styles from './Picker.module.css'
import ReactCursorPosition from 'react-cursor-position'
import { motion } from 'framer-motion'
import preloader from '../../common/25.gif'

import { storage } from '../../firebase'

const Picker = ({id, logo, name, price, position, pick}) => {
  const [image, setImage] = useState(preloader)
  const [pos, setPos] = useState(position)

  const cursorHandler = (e) => {
    const width = e.target.offsetWidth;
    const height = e.target.offsetHeight;
    setPos({
      x: position.x - (width/2),
      y: position.y - (height/2)
    })
  }

  storage.ref(logo).getDownloadURL().then(url => setImage(url))
  return (
      <motion.div
        className={styles.Picker}
        whileHover={{scale: 1.03}}
        whileTap={{scale: 0.97}}
        initial={{scale: 1}}
        transition={{duration: 0.03}}
        exit={{scale: 3}}
      >
      <div className={styles.cursorArea} onMouseMove={cursorHandler}>
        {position && <span className={styles.shine} style={
          {
            top: (pos.y),
            left: (pos.x)
          }
        }
        ></span>}

          <img style={image === preloader ? {width: 64, height: 64} : {}} className={styles.brandLogo} src={image} alt='Alpha Hookah'/>
          <h3 className={styles.name}>{name}</h3>
          <span className={styles.price}>{price}</span>
        </div>
      </motion.div>
  )
}

export default (props) => {
  return (
    <ReactCursorPosition>
      <Picker {...props}/>
    </ReactCursorPosition>
  )
};
