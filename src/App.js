import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
 // Импортируем компонент восстановления пароля

function App() {
  return (
    <Router>
      <Routes>
        {/* Основные маршруты */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        

        {/* Перенаправления */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;