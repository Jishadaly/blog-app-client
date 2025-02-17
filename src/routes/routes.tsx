import LandingPage from '@/app/landing'
import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
  } from 'react-router-dom'
  import LoginPage from '@/app/Login';
  import RegisterPage from '@/app/Register';
  import OTPPage from '@/app/otp/page';
  import Home from '@/app/home/Home';
  import Protected from './protectedRoute.tsx';
import { CreateBlog } from '@/app/blog/blogCreate.tsx';
import Layout from '@/components/layout/mainLayout.tsx';
import { EditBlog } from '@/app/blog/updateBlog.tsx';


  const router = createBrowserRouter( 
    createRoutesFromElements(
      <Route path='/'>
        <Route index element={<LandingPage />} />
   
        <Route  element={<Protected/> }>
        
          <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>} />
              <Route path='home' element={<Home/>}/>
              <Route path='createBlog' element={<CreateBlog/>} />
              <Route path='updateBlog/:blogId' element={<EditBlog/>}/>
          </Route>
        </Route>
  
  
        <Route path='/login' element={<LoginPage />} />
        <Route path='/' element={<LandingPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/otp' element={<OTPPage />} />

      </Route>
    )
  )
  
  export default router;