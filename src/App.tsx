import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './components/pages/LoginPage'
import RegisterPage from './components/pages/RegisterPage'
import { SubmitHandler, useForm } from 'react-hook-form';

interface iAddress {
  country: string;
  city: string;
  street: string;
  house: string;
}

interface IShippingFields {
  email: string;
  name: string;
  address: iAddress;

}

interface MyForm {
  name: string;
  age: number;
}

function App() {
  const { register, handleSubmit } = useForm<MyForm>({
    defaultValues: {
      age: 18
    }
  })

  const submit: SubmitHandler<MyForm> = data => {
    console.log(data)
  }

  // const onSubmit: SubmitHandler<IShippingFields> = (data) => {
  //   alert(`Your name ${data.name}`);
  // };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit(submit)}>
          <input type="text" {...register('name')} />
          <input type="text" {...register('age')} />
          <button>Отправить</button>
        </form>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/sign-in' element={<LoginPage />} />
          <Route path='/sign-up' element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )

  // return (
  // <BrowserRouter>
  //   <Routes>
  //     <Route path='/' element={<LoginPage />} />
  //     <Route path='/sign-in' element={<LoginPage />} />
  //     <Route path='/sign-up' element={<RegisterPage />} />
  //   </Routes>
  // </BrowserRouter>
  // )
}

export default App
