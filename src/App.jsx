import { useState } from 'react'
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import Create from './Components/Create'
import Update from './Components/Updaet'
import Read from './Components/Read'
import Home from './Components/Home'

function App() {
  return ( <Router>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/create' element={<Create />} />
      <Route path='/read/:id' element={<Read />} />
      <Route path='/update/:id' element={<Update />} />
    </Routes>
  </Router>
);
}

export default App
