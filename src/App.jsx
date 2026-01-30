import { useState } from 'react'
import { Header } from './components/Header'
import './App.css'
import { Register } from './pages/Register'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Register/>
    </>
      )
}

export default App
