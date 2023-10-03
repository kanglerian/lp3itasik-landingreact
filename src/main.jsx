import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import 'flowbite'
import './index.css'

import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';

import Home from './pages/Home'
import About from './pages/About';
import Branding from './pages/Branding';
import Organization from './pages/Organization';
import Facilities from './pages/Facilities';
import Program from './pages/Program';
import Student from './pages/Student';
import Media from './pages/Media';
import Article from './pages/Article';
import ArticleDetail from './pages/ArticleDetail';
import ProgramDetail from './pages/ProgramDetail';
import StudentDetail from './pages/StudentDetail';
import MediaDetail from './pages/MediaDetail';
import CareerCenter from './pages/CareerCenter';
import KelasKaryawan from './pages/KelasKaryawan';
import Complaint from './pages/Complaint';
import Redirect from './pages/Redirect';
import UPPM from './pages/UPPM';
import PenerimaanMahasiswa from './pages/PenerimaanMahasiswa';
import ConflictRegister from './pages/ConflictRegister';

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
  {
    path: "/articles",
    element: <Article/>
  },
  {
    path: "/articles/:uuid",
    element: <ArticleDetail/>
  },
  {
    path: "/media",
    element: <Media/>
  },
  {
    path: "/media/:uuid",
    element: <MediaDetail/>
  },
  {
    path: "/suggestion",
    element: <Complaint/>
  },
  {
    path: "/complaint",
    element: <Redirect/>
  },
  {
    path: "/reguler-sore",
    element: <KelasKaryawan/>
  },
  {
    path: "/uppm",
    element: <UPPM/>
  },
  {
    path: "/penerimaan-mahasiswa",
    element: <PenerimaanMahasiswa/>
  },
  {
    path: "/conflict-register",
    element: <ConflictRegister/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <I18nextProvider i18n={i18n}>
    <RouterProvider router={router} />
  </I18nextProvider>,
)
