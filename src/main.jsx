import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayout from './layout/MainLayout.jsx';
import Home from './components/Home.jsx';
import AddCoffee from './components/AddCoffee.jsx';
import UpdateCoffee from './components/UpdateCoffee.jsx';
import CoffeeDetails from './components/CoffeeDetails.jsx';
import Signin from './components/Signin.jsx';
import Signup from './components/Signup.jsx';
import AuthProvider from './context/AuthProvider.jsx';
import User from './components/User.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,

    children:[
      {
        index: true,
        loader:()=>fetch('http://localhost:3000/coffee'),
        Component:Home
      },
      {
        path: 'addCoffee',
        Component:AddCoffee
      },
      {
        path:'/updateCoffee/:id',
        loader:({params})=>fetch(`http://localhost:3000/coffee/${params.id}`),
        Component:UpdateCoffee
      },
      {
        path:'/coffee/:id',
        loader:({params})=>fetch(`http://localhost:3000/coffee/${params.id}`),
        Component:CoffeeDetails
      },
      {
        path:'signin',
        Component:Signin
      },
      {
        path:'signup',
        Component:Signup
      },
      {
        path:'users',
        loader:()=>fetch('http://localhost:3000/users'),
        Component:User
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
       <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
