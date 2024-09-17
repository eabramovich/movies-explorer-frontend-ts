import { useState } from 'react'
import { Button } from './components/ui/button'
import { Input } from './components/ui/input/Input'

function App() {

  return (
    <div>
       <Button title='Регистрация'/> 
       <Input value='123' onChange={() => console.log('123')} type='text' />
    </div>
  )
}

export default App
