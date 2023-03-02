import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Api from '../../api/Api'
import { incremented } from '../../redux/Slices/MainSlice'
import Button from '../Button/Button'
import css from './Card.module.css'

function Card({title, id, description, price, isAdmin = false}) {
  const value = useSelector((state) => state.main.value)
  const dispatch = useDispatch();

  const sum = Math.round(price)

  const testRedux = () => {
    dispatch(incremented())
  }

  const deleteCard = () => {
    const res = window.confirm("Вы действительной хотите удалить " + title + "?") 
    if(res) {
      Api.deleteCards(id)
        .then(() => {
          window.location.reload()
        })
    }
  }
  
  return (
    <div className={css.wrapper}>
        <div className={css.imageWrapper}>
        <img src="https://dodopizza-a.akamaihd.net/static/Img/Products/9cf62eab14b64d6a8ce0a9f5710f4f76_366x366.webp" alt={title} />
        </div>
        <p className={css.title}>{title}</p>
        <p className={css.txt}>{description}</p>
        <div className={css.actions}>
            <p className={css.price}>{sum} сом {value}</p>
            { isAdmin ? ( 
              <Button onClick={deleteCard} variant="empty" title={'Удалить'}/>
            ) : (
              <Button onClick={testRedux} variant="empty" title={'В корзину'}/>
            )}
        </div>
    </div>
  )
}

export default Card