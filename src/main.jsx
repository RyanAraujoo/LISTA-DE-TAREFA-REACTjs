import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
//
import App from './App'
import PushTask from './components/PushTask'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/Task' element={<PushTask/>}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
)
