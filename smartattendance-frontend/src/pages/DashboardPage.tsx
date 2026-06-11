import { useEffect, useState } from 'react'

import StatCard from '../components/ui/StatCard'
import { studentService } from '../services/studentService'
import type { Student } from '../types/Student'

function DashboardPage() {
  const [students, setStudents] = useState<Student[]>([])

  useEffect(() => {
    loadStudents()
  }, [])

  const loadStudents = async () => {
    try {
      const data = await studentService.getStudents()
      setStudents(data)
    } catch (error) {
      console.error('Error loading students', error)
    }
  }

  const activeStudents = students.filter(
    (student) => student.isActive
  ).length

  const inactiveStudents = students.filter(
    (student) => !student.isActive
  ).length

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">
        Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard
          title="Alumnos"
          value={students.length}
        />

        <StatCard
          title="Activos"
          value={activeStudents}
        />

        <StatCard
          title="Inactivos"
          value={inactiveStudents}
        />
      </div>
    </div>
  )
}

export default DashboardPage