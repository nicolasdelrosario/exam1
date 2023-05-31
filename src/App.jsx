import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainNav from './common/MainNav';
import Inicio from './pages/Inicio'
import AboutUs from './pages/AboutUs'
import WhyUs from './pages/WhyUs'
import MainFooter from './common/MainFooter';

function App() {
  return (
    <>
      <BrowserRouter>
        <MainNav/>

        <Routes>
          <Route path='/' element={<Inicio />}/>
          <Route path='/about-us' element={<AboutUs />}/>
          <Route path='/why-us' element={<WhyUs />}/>
        </Routes>

        <MainFooter/>
      </BrowserRouter>
    </>
  )
}

export default App
