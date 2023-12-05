import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AdminChapter, AdminDashboard, AdminKelas, AdminLogin, AdminModul, Register } from "./page"
import Home from "./page/Home"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminLogin/>}/>
        <Route path="/register" element={<Register/>}/>
        {/* <Route path="/admin/login" element={<AdminLogin/>}/> */}
        <Route path="/admin" element={<AdminDashboard />}/>
        <Route path="/admin/courses" element={<AdminKelas />}/>
        <Route path="/admin/chapters" element={<AdminChapter />}/>
        <Route path="/admin/modules" element={<AdminModul />}/>


      </Routes>
    </BrowserRouter>
  )
}

export default App
