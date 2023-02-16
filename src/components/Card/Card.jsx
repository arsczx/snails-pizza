import React from 'react'
import css from './Card.module.css'

function Card() {
  return (
    <div className={css.wrapper}>
        <img src="https://dodopizza-a.akamaihd.net/static/Img/Products/c940c5751e6d420e997d86c26a8ba16f_366x366.webp" alt="" />
        <p>Пицца из половинок</p>
    </div>
  )
}

export default Card