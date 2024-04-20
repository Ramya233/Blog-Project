/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Layout from './Pages/Layout';
import Home from './Pages/Home';
import Blog from './Pages/Blog';
import Createblog from './Pages/Createblog';
import Nopage from './Pages/Nopage';

const App = () =>  {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
         <Route path="/" element={<Home />}></Route>
         <Route path="/blog/:id" element={<Blog />}></Route>
         <Route path="/create" element={<Createblog />}></Route>
         <Route path='*' element={<Nopage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
