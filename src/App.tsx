
import LoginPage from './app/Login'
import LandingPage from './app/landing'
import {  RouterProvider } from 'react-router-dom'
import RegisterPage from './app/Register'
import OTPPage from './app/Otp'
import Home from './app/home/Home'
import { store, persister } from './Redux/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { Toaster, } from 'sonner'
import router from './routes/routes'


function App() {
  return (
    <>
      <Provider store={store} >
        <PersistGate loading={null} persistor={persister}>
          <Toaster position="bottom-right" theme='dark' />
          {/* <Navigator>
            <Routes>
              <Route path='/login' element={<LoginPage />} />
              <Route path='/' element={<LandingPage />} />
              <Route path='/register' element={<RegisterPage />} />
              <Route path='/otp' element={<OTPPage />} />
              <Route path='/home' element={<Home />} />
              
            </Routes>
          </Navigator> */}

          <RouterProvider router={router} />
        </PersistGate>

      </Provider>
    </>
  )
}

export default App
