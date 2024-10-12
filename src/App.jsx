import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Error from './Pages/Error'
import Location from './Pages/Location'


function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/location/:id' element={<Location/>}/>
          <Route path='/error' element={<Error/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
