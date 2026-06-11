import { Routes, Route } from 'react-router-dom'

import DashboardPage from '../pages/DashboardPage'
import StudentsPage from '../pages/StudentsPage'
import StudentForm from '../components/StudentForm'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />

      <Route path="/students" element={<StudentsPage />} />

      <Route path="/students/new" element={<StudentForm />} />
    </Routes>
  )
}

export default AppRoutes