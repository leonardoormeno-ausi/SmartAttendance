import { useEffect, useState } from 'react'

import StudentsTable from '../components/StudentsTable'
import StudentForm from '../components/StudentForm'

import { studentService } from '../services/studentService'
import type { Student } from '../types/Student'

function StudentsPage() {
  const [students, setStudents] = useState<Student[]>([])
  const [showForm, setShowForm] = useState(false)

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
          onClick={() => setShowForm(!showForm)}
        >
          Nuevo Alumno
        </button>
      </div>

      {showForm && <StudentForm />}

      <p className="mb-4 text-slate-600">
        Total: {students.length} alumnos
      </p>

      <StudentsTable students={students} />
    </div>
  )
}

export default StudentsPage