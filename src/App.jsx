import React from 'react'
import Navbar from './components/Navbar/Navbar'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Coin from './pages/Coin/Coin'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'
const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
          <Route path='/'exact element={<Home/>}/>
          <Route path='/coin/:coinId'exact element={<Coin/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </div>
  )
}

export default App
