import Button from '@/components/Button'
import Input from '@/components/Input'
import Todo from '@/components/Todo'
import React, { useState } from 'react'

export default function Home() {

  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')


  return (
    <div>
      <div className='w-[50%] mx-auto border-red-500 border-2'>
        {
          todos.map((todo, index) => {
            return <Todo text={todo} onClick={() => { 
              let filterdArray = todos.filter(theTodo => theTodo !== todo)
              setTodos(filterdArray)
            }} />
          })
        }

        <div className='flex'>
          <Input value={input} onChange={(e) => {
            setInput(e.target.value)
          }} />
          <Button text="Ekle" onClick={() => {
            let newTodo = input;
            setTodos([newTodo, ...todos])
            setInput('')
          }} />
        </div>
      </div>
    </div>
  )
}
