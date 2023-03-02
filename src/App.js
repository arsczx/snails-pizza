import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import PrivateRoute from './components/Routes/PrivateRoute';
import PublicRoute from './components/Routes/PublicRoute';
import AdminPage from './pages/AdminPage/AdminPage';
import CreateProduct from './pages/CreateProduct/CreateProduct';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';


function App() {
  const a = JSON.parse(localStorage.getItem('auth'))
  const [auth, setAuth] = useState(a)

  useEffect(() => {
    localStorage.setItem('auth', auth)
  }, [auth])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route 
          path='/login' 
          element={
            <PublicRoute>
              <LoginPage setAuth={setAuth} />
            </PublicRoute>
          }
        />
        <Route 
          path='/admin' 
          element={
            <PrivateRoute>
              <AdminPage />
            </PrivateRoute>
          } 
        />
        <Route 
          path='/create-product' 
          element={
            <PrivateRoute>
              <CreateProduct />
            </PrivateRoute>
          } 
        />
        <Route path='/product/:id' element={<div>PDP</div>} />
      </Routes>
    </div>
  );
}

export default App;