import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Title from '../../components/Title/Title'
import css from './AdminPage.module.css'
import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';
import Api from '../../api/Api';

function AdminPage() {
  const [card, setCard] = useState([]);
  const [error, setError] = useState('');


  const getCards = async () => {
    const res = await Api.getCard()
    if(res.status === 200) {
      setCard(res.data)
    } else {
      setError("Что-то пошло не так, попробуйте перезагрузить")
    }
  } 

  useEffect(() => {
    getCards()
  }, [])

  return (
    <div className='container'>
      <Title title='Пиццы' position='center'/>
      <section className='d-flex'>
        <Link to='/create-product' className={css.addBlock}>
          <img src="https://cdn-icons-png.flaticon.com/512/3416/3416027.png" alt="Plus" />
          <p className={css.title}>Добавить продукт</p>
        </Link>
        {
          card.map((item) => <Card key={item.id} {...item} isAdmin={true}/>)
        }
      </section>
    </div>
  )
}

export default AdminPage