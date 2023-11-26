import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Register } from "./page"
import Home from "./page/Home"
import Admin_Login from "./page/Admin_Login"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login/admin" element={<Admin_Login/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
