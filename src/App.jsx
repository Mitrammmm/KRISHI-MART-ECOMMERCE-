import React from 'react'
import {Routes,Route} from "react-router-dom"
import Header from './component/layout/Header'
import Home from './component/Home'
import Footer from './component/layout/Footer'
import ProductDetail from './component/product/ProductDetail'
import Cart from './component/cart/Cart'
import Login from './component/user/Login'
import Register from './component/user/Register'
import Dashboard from './component/admin/Dashboard'
import Contact from './component/Contact'
import Profile from './component/user/Profile'
import Favorites from './component/cart/Favourite'
import About from './component/About'


function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='productDetail/:id' element={<ProductDetail/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/favourites' element={<Favorites/>} />
      <Route path='/about' element={<About/>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App