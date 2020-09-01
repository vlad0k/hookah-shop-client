import React from 'react';
import style from './CloseButton.module.css'
import { IoIosArrowBack, IoIosClose } from "react-icons/io"

const CloseButton = ({ action, type, ...props }) => {

  type = type ? type : 'arrow';

  const clickHandler = () => {
    if ((Array.isArray(action))) {
      action.forEach( a => a(null))
    } else action(null)
  }

  return (
    <span className={style.backButton} onClick={clickHandler}>
      {(type === 'arrow') && <span className={style.arrow}><IoIosArrowBack {...props}/><span>Close</span></span>}
      {(type === 'x') && <span className={style.x}><IoIosClose {...props}/></span>}
    </span>
  )
}

export default CloseButton;
