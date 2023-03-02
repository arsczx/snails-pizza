import React from 'react'
import Button from '../Button/Button'
import css from './Footer.module.css'

function Footer() {
  return (
    <div className={css.wrapper}>
        <div className={css.secretWrapper}>
        <div className={css.secret}>
            <img className={css.secret__logo} src="https://cdn-icons-png.flaticon.com/512/3033/3033222.png" alt="" />
            <p className={css.secret__txt}>Стань тайным покупателем Додо Пиццы и получи пиццу в подарок</p>
            <Button variant="empty" title="Заполнить анкету"/>
        </div>
        </div>
    </div>
  )
}

export default Footer