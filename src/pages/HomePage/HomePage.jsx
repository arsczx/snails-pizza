import React, { useEffect, useState } from 'react'
import { json } from 'react-router-dom'
import Card from '../../components/Card/Card'
import Footer from '../../components/Footer/Footer'
import SliderCard from '../../components/SliderCard/SliderCard'
import Title from '../../components/Title/Title'
import css from './HomePage.module.css'
import NavBar from '../../components/NavBar/NavBar'
import Api from '../../api/Api'

function HomePage() {

  const [card, setCard] = useState([]);
  const [error, setError] = useState('');
  const [drink, setDrink] = useState([]);

  const getCards = async () => {
    // const res = await fetch('https://63e4e7558e1ed4ccf6e8bfae.mockapi.io/api/card')
    const res = await Api.getCard()
    if(res.status === 200) {
      setCard(res.data)
    } else {
      setError("Что-то пошло не так, попробуйте перезагрузить")
    }
  }
  
  const getDrinks = async () => {
    const res = await fetch('https://63e4e7558e1ed4ccf6e8bfae.mockapi.io/api/drinks')
    // const res = await Api.getCard()
    if(res.status === 200) {
      setDrink(res.data)
    } else {
      setError("Что-то пошло не так, попробуйте перезагрузить")
    }
  }

  useEffect(() => {
    getCards()
    getDrinks()
  }, [])

  if(error) return <h1>{error}</h1>
  return (
    <div className='container'>
      <NavBar/>
        <main><SliderCard/></main>
        <section className={css.pizzas}>
          <Title title="Пицца"/>
          <div className={css.cardsWrapper}>
            {
              card.map((item) => <Card key={item.id} {...item}/>)
            }
          </div>
        </section>
        <section>
          <Title title="Напитки"/>
          <div className={css.cardsWrapper}>
            {
              // drink.map((item) => <Card key={item.id} {...item}/>)
            }
          </div>
        </section>
        <Footer />

    </div>
  )
}

export default HomePage