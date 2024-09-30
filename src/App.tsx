import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './components/pages/LoginPage'
import RegisterPage from './components/pages/RegisterPage'
import Movies from './components/pages/MoviesPage'
import ProtectedRouteElement from './components/ProtectedRoute/ProtectedRoute'

function App() {
  return (
    <>
      {/* <div>
        <form onSubmit={handleSubmit(submit)}>
          <input type="text" {...register('name')} />
          <input type="text" {...register('age')} />
          <button>Отправить</button>
        </form>
      </div> */}
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/sign-in' element={<LoginPage />} />
          <Route path='/sign-up' element={<RegisterPage />} />
          <Route path="/movies" element={<ProtectedRouteElement element={Movies}/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
