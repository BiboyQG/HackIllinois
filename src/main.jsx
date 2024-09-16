import { Fragment } from 'react'
import { createRoot } from 'react-dom/client'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios'
import App from './App.jsx'
import './index.css'

axios.defaults.baseURL = '/api'

createRoot(document.getElementById('root')).render(
  <Fragment>
    <App />
    <ToastContainer />
  </Fragment>,
)
