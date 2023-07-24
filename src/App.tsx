import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Nav from './components/Nav'
import ItemPage from './pages/ItemPage'
import { ShoppingCartProvider } from './context/ShoppingCartContext'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function App() {
  return (
    <ShoppingCartProvider>
      <Nav />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/item/:id' element={<ItemPage />}/>
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
    </ShoppingCartProvider>
  )
}

export default App
