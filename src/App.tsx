import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Dashboard from './components/Dashboard'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignUp />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
