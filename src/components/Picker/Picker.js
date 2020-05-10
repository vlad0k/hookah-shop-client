import React, {useState} from 'react';
import styles from './Picker.module.css';
import ReactCursorPosition from 'react-cursor-position';

const Picker = ({logo, name, price, position}) => {
  const [pos, setPos] = useState(position)
  const cursorHandler = (e) => {
    const width = e.target.offsetWidth;
    const height = e.target.offsetHeight;
    setPos({
      x: position.x - (width/2),
      y: position.y - (height/2)
    })
  }
  return (
    <div className={styles.Picker} >
    <div className={styles.cursorArea} onMouseMove={cursorHandler}>
      {position && <span className={styles.shine} style={
        {
          top: (pos.y),
          left: (pos.x)
        }
      }
      ></span>}

        <img className={styles.brandLogo} src={logo} alt='Alpha Hookah'/>
        <h3 className={styles.name}>{name}</h3>
        <span className={styles.price}>{price}</span>
      </div>
    </div>
  )
}

export default (props) => {
  return (
    <ReactCursorPosition>
      <Picker {...props}/>
    </ReactCursorPosition>
  )
};
