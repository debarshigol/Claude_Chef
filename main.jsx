import { Fragment, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Header} from './header.jsx'
import {MainBody} from './mainBody.jsx'

createRoot(document.getElementById('root')).render(
  <Fragment>
    <Header/>
    <MainBody/>
  </Fragment>
)
