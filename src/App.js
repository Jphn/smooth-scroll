import './App.css'

import { HashRouter, Route, Routes } from 'react-router-dom'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages'
import SigninPage from './pages/signin'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="signin" element={<SigninPage />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
