import { Routes, Route } from 'react-router-dom';
import { Home } from './component/Home/Home';
import { Login } from './component/Login/Login';
import { ProtectedRoute } from './component/ProtecRoutes';
import { Register } from './component/Register/Register';
import { AuthProvider } from './Context/authContext';

export default function App() {
  return (
    <div className="bg-slate-300 h-screen text-black flex" >
      <AuthProvider>
        <Routes>
          <Route path="/home" element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </AuthProvider>
    </div>
  )
}