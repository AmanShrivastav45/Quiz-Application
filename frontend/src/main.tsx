import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Instructions from './pages/Instructions.tsx';
import Quiz from './pages/Quiz.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: < Instructions/>,
  },
  {
    path: "/quiz",
    element: < Quiz/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router= {router} />
  </React.StrictMode>,
)
