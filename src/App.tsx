import { RouterProvider } from 'react-router-dom'
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
          <RouterProvider router={router} />
        </PersistGate>

      </Provider>
    </>
  )
}

export default App
