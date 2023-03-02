import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Api from '../../api/Api';
import Button from '../../components/Button/Button'
import Title from '../../components/Title/Title'
import css from './CreateProduct.module.css'

function CreateProduct() {
  const [title, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [type, setType] = useState('');
  const [image, setImage] = useState('');

  const [isSending, setSending] = useState(false);
  const navigate = useNavigate();


  const submit = (e) => {
    e.preventDefault();
    setSending(true)
    Api.createCard({
      title,
      description,
      price,
      type,
      image,
    })
      .then(() => {
        alert("Вы создали пиццу")
        navigate('/admin')
      })
      .catch((error) => {
        console.error(error)
        setSending(false)
      })
  }

  return (
    <div className='container'>
      <Title title="Добавить продукт" position="center" />
      <form onSubmit={submit} className={css.create}>
        <div className={css.inputBox}>
          <input value={title} onChange={(e) => setName(e.target.value)} type="text" required="required" />
          <span>Название</span>
        </div>
        <div className={css.inputBox}>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required="required" />
          <span>Описание</span>
        </div>
        <div className={css.inputBox}>
          <input value={price} onChange={(e) => setPrice(e.target.value)} type="text" required="required" />
          <span>Цена</span>
        </div>
        <select value={type} onChange={(e) => setType(e.target.value)} className={css.slct}>
          <option value="pizza">Пицца</option>
          <option value="drink">Напиток</option>
        </select>
        <div className={css.inputBox}>
          <input value={image} onChange={(e) => setImage(e.target.value)} type="text" required="required" />
          <span>Фото</span>
        </div>
        <Button disabled={isSending} title={isSending ? 'Продукт добавляеться...' : 'Добавить продукт'} />
      </form>
    </div>
  )
}

export default CreateProduct