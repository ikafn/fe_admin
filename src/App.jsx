import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AdminDashboard, AdminLogin, Register } from "./page"
import Home from "./page/Home"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login/admin" element={<AdminLogin/>}/>
        <Route path="/admin/dashboard" element={<AdminDashboard />}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
