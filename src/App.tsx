import './App.css'
import LoginPage from './app/Login'
import LandingPage from './app/page'
import { BrowserRouter as Navigator, Route, Routes } from 'react-router-dom'
import RegisterPage from './app/Register'


function App() {
  return (
    <>
      <Navigator>
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/' element={<LandingPage />} />
          <Route path='/register' element={<RegisterPage />} />

        </Routes>
      </Navigator>

    </>
  )
}

export default App
