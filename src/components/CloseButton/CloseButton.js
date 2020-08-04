import React from 'react';
import style from './CloseButton.module.css'
import { IoIosArrowBack, IoIosClose } from "react-icons/io"

const CloseButton = ({ action, type }) => {

  type = type ? type : 'arrow';

  const clickHandler = () => {
    if ((Array.isArray(action))) {
      action.forEach( a => a(null))
    } else action(null)
  }

  return (
    <div className={style.backButton} onClick={clickHandler}>
      {(type === 'arrow') && <div class={style.arrow}><IoIosArrowBack /><span>Close</span></div>}
      {(type === 'x') && <div className={style.x}><IoIosClose /></div>}
    </div>
  )
}

export default CloseButton;
