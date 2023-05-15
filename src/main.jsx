import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home'

import 'flowbite'
import './index.css'
import About from './pages/About';
import Branding from './pages/Branding';
import Organization from './pages/Organization';
import Facilities from './pages/Facilities';
import Program from './pages/Program';
import Student from './pages/Student';
import ProgramDetail from './pages/ProgramDetail';
import StudentDetail from './pages/StudentDetail';
import CareerCenter from './pages/CareerCenter';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/about",
    element: <About/>
  },
  {
    path: "/branding",
    element: <Branding/>
  },
  {
    path: "/organization",
    element: <Organization/>
  },
  {
    path: "/facilities",
    element: <Facilities/>
  },
  {
    path: "/programs",
    element: <Program/>
  },
  {
    path: "/programs/:uuid",
    element: <ProgramDetail/>
  },
  {
    path: "/students",
    element: <Student/>
  },
  {
    path: "/students/:uuid",
    element: <StudentDetail/>
  },
  {
    path: "/career",
    element: <CareerCenter/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
