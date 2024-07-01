import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import {BrowserRouter,Routes ,Route} from 'react-router-dom'
import CartDetails from './components/CartDetails'
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Header/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/cart' element={<CartDetails/>}/>
   </Routes>
   
    </BrowserRouter>
  )
}

export default App
