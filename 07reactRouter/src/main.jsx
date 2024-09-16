import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/Home/Home'
import Routee from './Routee'
import Contact from './components/Contact/Contact'
import About from './components/About/About'
import User from './components/User/User'
import Github, { githubInfoLoader } from './components/Github/Github'
import './index.css'
import { Route } from 'react-router-dom'
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
// const router=createBrowserRouter([{
//   path: '/',
//   element: <Routee/>,
//   children :[
//     {
//     path:'',
//     element:<Home/>

//   },
//   {
//     path:"about",
//     element:<About/>

//   },
//   {
//     path:"contact",
//     element:<Contact/>
//   }
// ]
// }])
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Routee/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='user/:id' element={<User/>}/>
      <Route 
      loader={githubInfoLoader}
      path='github' element={<Github/>}/>
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
