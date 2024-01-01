import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AdminChapter, AdminDashboard, AdminKelas, AdminLogin, AdminModul } from "./page"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminLogin/>}/>
        <Route path="/admin" element={<AdminDashboard />}/>
        <Route path="/admin/courses" element={<AdminKelas />}/>
        <Route path="/admin/chapters" element={<AdminChapter />}/>
        <Route path="/admin/modules" element={<AdminModul />}/>


      </Routes>
    </BrowserRouter>
  )
}

export default App
