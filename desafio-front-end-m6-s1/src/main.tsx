import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Main'
import { InputFieldsProvider } from './contexts/InputFormValue'
import './main.css'
import { OutputFieldsProvider } from './contexts/OutputValues'
import {Toaster} from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <InputFieldsProvider>
    <OutputFieldsProvider>
      <Toaster/>
      <Home></Home>
    </OutputFieldsProvider>
    </InputFieldsProvider>
  </React.StrictMode>
)
