import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AdminLogin, Register } from "./page"
import Home from "./page/Home"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login/admin" element={<AdminLogin/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
