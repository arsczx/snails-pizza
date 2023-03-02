import React from 'react'
import css from './Header.module.css'
import logo from './../../assets/dodopizza.png'
import star from './../../assets/star.png'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import NavBar from '../NavBar/NavBar'

function Header() {
  return (
    <div className={css.card + " container"}>
      <div className={css.wrapper}>
      <div className={css.left}>
        <Link to="/">
          <img className={css.logo} src={logo} alt="" />
        </Link>
        <div className={css.delivery}>
          <p className={css.title}>Доставка пиццы Бишкек</p>
          <div className={css.time}>
            <p>34 мин <i></i> 4.75</p>
            <img className={css.star} src={star} alt="" />
          </div>
        </div>
          <div className={css.number}>
            <a className={css.num} href="">0 (706) 200-311</a>
            <p className={css.txt}>Звонок по телефону</p>
          </div>
      </div>
      <Button variant="full" title="Корзина" />
      </div>
      {/* <NavBar/> */}
    </div>
  )
}

export default Header