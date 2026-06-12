import { useEffect, useState } from 'react'

import StudentsTable from '../components/StudentsTable'
import StudentForm from '../components/StudentForm'

import { studentService } from '../services/studentService'
import type { Student } from '../types/Student'

function StudentsPage() {
  const [students, setStudents] = useState<Student[]>([])
  const [showForm, setShowForm] = useState(false)
  const [editingStudent, setEditingStudent] =
  useState<Student | null>(null)

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
  const handleEdit = (student: Student) => {
  setEditingStudent(student)
  setShowForm(true)
  }
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">
          Alumnos
        </h1>

        <button
          className="bg-sky-600 text-white px-4 py-2 rounded hover:bg-sky-700"
          onClick={() => {
  setEditingStudent(null)
  setShowForm(!showForm)
}}
        >
          Nuevo Alumno
        </button>
      </div>

      {showForm && (
  <StudentForm
    student={editingStudent ?? undefined}
    onStudentCreated={async () => {
      await loadStudents()

      setEditingStudent(null)
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
  onEdit={handleEdit}
/>
    </div>
  )
}

export default StudentsPage