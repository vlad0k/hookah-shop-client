import React from 'react';
import style from './CloseButton.module.css'
import { IoIosArrowBack } from "react-icons/io"

const CloseButton = ({ action }) => {

  const clickHandler = () => {
    if ((Array.isArray(action))) {
      action.forEach( a => a(null))
    } else action(null)
  }

  return (
    <div className={style.backButton} onClick={clickHandler}>
      <IoIosArrowBack /><span>Close</span>
    </div>
  )
}

export default CloseButton;
