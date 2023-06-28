import React from 'react'  /* Если что удалить */
import s from './Post.module.css'


const Post = (props) => {
    
  
  return (
    <div className={s.item}>
    <img src='https://i.playground.ru/p/lkXOK5lnw4vhHlsa-jTNow.jpeg'  /> 
      {props.message}
        <div>
      <span>{props.likeCounts}</span>
      </div>
      </div>
      )
}

export default Post