import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/home/Home"
import Footer from "./components/footer/Footer"
import ListarCategorias from "./components/categoria/listarCategorias/ListarCategorias"
import FormCategoria from "./components/categoria/formCategoria/FormCategoria"
import DeletarCategoria from "./components/categoria/deletarCategoria/DeletarCategoria"

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className='min-h-[80vh]'>
          <Routes>
          <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/categorias' element={<ListarCategorias />} />
            <Route path='/cadastrarcategoria' element={<FormCategoria />} />
            <Route path='/editarcategoria/:id' element={<FormCategoria />} />
            <Route path='/deletarcategoria/:id' element={<DeletarCategoria />} />                      
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App