import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Login from './Pages/Login/Login';
import Password from './Pages/Password/Password';
import SignUp from "./Pages/SignUp/SignUp"
import Home from './Pages/Home/Home';
import Registration from './Pages/Registration/Registration';
import {RecoilRoot} from 'recoil'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/password",
    element: <Password />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/register",
    element: <Registration/>,
  },
  {
    path:'/',
    element: <Home/>,
  }
]);

root.render(

  <React.StrictMode>
  <RecoilRoot>  
   <RouterProvider router={router} />
   </RecoilRoot>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
