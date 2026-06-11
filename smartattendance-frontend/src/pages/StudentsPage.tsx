import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import StudentsTable from '../components/StudentsTable'
import { studentService } from '../services/studentService'
import type { Student } from '../types/Student'

function StudentsPage() {
  const [students, setStudents] = useState<Student[]>([])
  const navigate = useNavigate()

  useEffect(() => {
    loadStudents()
  }, [])

  const loadStudents = async () => {
    try {
      const data = await studentService.getStudents()
      setStudents(data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">
          Alumnos
        </h1>

        <button
          className="bg-sky-600 text-white px-4 py-2 rounded hover:bg-sky-700"
          onClick={() => navigate('/students/new')}
        >
          Nuevo Alumno
        </button>
      </div>

      <p className="mb-4 text-slate-600">
        Total: {students.length} alumnos
      </p>

      <StudentsTable students={students} />
    </div>
  )
}

export default StudentsPage