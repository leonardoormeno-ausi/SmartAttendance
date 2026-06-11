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

  const handleDelete = async (id: number) => {
    const confirmed = window.confirm(
      '¿Desea eliminar este alumno?'
    )

    if (!confirmed) {
      return
    }

    try {
      await studentService.deleteStudent(id)

      await loadStudents()
    } catch (error) {
      console.error(error)

      alert('Error al eliminar alumno')
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

      {showForm && (
        <StudentForm
          onStudentCreated={async () => {
            await loadStudents()
            setShowForm(false)
          }}
        />
      )}

      <p className="mb-4 text-slate-600">
        Total: {students.length} alumnos
      </p>

      <StudentsTable
        students={students}
        onDelete={handleDelete}
      />
    </div>
  )
}

export default StudentsPage