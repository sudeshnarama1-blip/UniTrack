import { Routes, Route, Navigate } from "react-router-dom"

import Dashboard from "./pages/Dashboard"
import Attendance from "./pages/Attendance"
import CGPA from "./pages/CGPA"
import Assignments from "./pages/Assignments"
import FocusMode from "./pages/FocusMode"
import Profile from "./pages/Profile"
import Login from "./pages/Login"

function ProtectedRoute({ children }) {

  const isLoggedIn =
    localStorage.getItem("isLoggedIn") === "true"

  return isLoggedIn
    ? children
    : <Navigate to="/login" />
}

function App() {
  return (
    <Routes>

      {/* Login */}
      <Route
        path="/login"
        element={<Login />}
      />

      {/* Dashboard */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      {/* Attendance */}
      <Route
        path="/attendance"
        element={
          <ProtectedRoute>
            <Attendance />
          </ProtectedRoute>
        }
      />

      {/* CGPA */}
      <Route
        path="/cgpa"
        element={
          <ProtectedRoute>
            <CGPA />
          </ProtectedRoute>
        }
      />

      {/* Assignments */}
      <Route
        path="/assignments"
        element={
          <ProtectedRoute>
            <Assignments />
          </ProtectedRoute>
        }
      />

      {/* Focus Mode */}
      <Route
        path="/focus"
        element={
          <ProtectedRoute>
            <FocusMode />
          </ProtectedRoute>
        }
      />

      {/* Profile */}
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />

    </Routes>
  )
}

export default App