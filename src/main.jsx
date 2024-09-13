
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Home from './Home.jsx'
import Dashboard from './Components/Dashboard.jsx'
import axios from 'axios';
import Manipulation from './Components/Manipulation.jsx'
import AddUser from './Components/AddUser.jsx'
axios.defaults.baseURL="https://668e6981bf9912d4c92e2f38.mockapi.io/api/1/mock/day30"
const router=createBrowserRouter(
  [
    {
      
      element: <Home/>,
    
    children : [
      {
        path:"/",
        element:<App/>
      },
      {
        path:"/dashboard",
        element:<Dashboard/>,
        children:[
          {
            path:"/dashboard/manipulation",
            element:<Manipulation/>
          },
          {
            path:"/dashboard/",
            element:<AddUser/>
          }
          
        ]
      },
      {
        path:"*",
        element:<h1>Page Not Found</h1>
      }
    ]
    }
  ]
)
ReactDOM.createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={router}/>
  
)
