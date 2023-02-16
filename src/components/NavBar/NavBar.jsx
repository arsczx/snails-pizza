import React from 'react'
import css from './NavBar.module.css'

function NavBar() {
  return (
    <div className={css.wrapper}>
        <nav>
        <ul>
            <li> <a href="">Пицца</a> </li>
            <li> <a href="">Комбо</a> </li>
            <li> <a href="">Закуски</a> </li>
            <li> <a href="">Десерты</a> </li>
            <li> <a href="">Напитки</a> </li>
        </ul>
        </nav>
    </div>
  )
}

export default NavBar