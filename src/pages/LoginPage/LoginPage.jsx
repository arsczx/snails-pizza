import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button/Button'
import css from './LoginPage.module.css'

function LoginPage({ setAuth }) {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    if (login === 'admin' && password === 'admin') {
      setAuth(true)
      // navigate('/admin')
    }
  }
  return (
    <div className={css.wrapper}>
      <form onSubmit={submit}>
        <input value={login}
          onChange={(e) => setLogin(e.target.value)}
          type="text"
          placeholder='Логин'
        />
        <br />
        <input value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder='Пароль'
        />
        <br />
        <Button title="Войти" />
      </form>
    </div>
  )
}

export default LoginPage