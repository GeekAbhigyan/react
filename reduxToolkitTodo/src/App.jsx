import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from '../public/components/AddTodo'
import Todos from '../public/components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>learn about redux</h1>
    <AddTodo />
    <Todos />
    </>
  )
}

export default App
