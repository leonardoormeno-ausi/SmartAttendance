import { useState } from 'react'

import { studentService } from '../services/studentService'

import type { Student } from '../types/Student'

type StudentFormProps = {
  onStudentCreated: () => void
  student?: Student
}

function StudentForm({
  onStudentCreated,
  student,
}: StudentFormProps) {
  const [firstName, setFirstName] =
  useState(student?.firstName ?? '')

const [lastName, setLastName] =
  useState(student?.lastName ?? '')

const [course, setCourse] =
  useState(student?.course ?? '')

const [email, setEmail] =
  useState(student?.email ?? '')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      if (student) {
  await studentService.updateStudent(student.id, {
    firstName,
    lastName,
    course,
    email,
    isActive: student.isActive,
  })
} else {
  await studentService.createStudent({
    firstName,
    lastName,
    course,
    email,
    isActive: true,
  })
}

      alert(
  student
    ? 'Alumno actualizado correctamente'
    : 'Alumno creado correctamente'
)

      setFirstName('')
      setLastName('')
      setCourse('')
      setEmail('')

      onStudentCreated()
    } catch (error) {
      console.error(error)

      alert('Error al crear alumno')
    }
  }

  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      <h2 className="text-lg font-bold mb-3">
        Nuevo Alumno
      </h2>

      <form onSubmit={handleSubmit} className="grid gap-3">
        <input
          className="border p-2 rounded"
          placeholder="Nombre"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <input
          className="border p-2 rounded"
          placeholder="Apellido"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <input
          className="border p-2 rounded"
          placeholder="Curso"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />

        <input
          className="border p-2 rounded"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          className="bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Guardar
        </button>
      </form>
    </div>
  )
}

export default StudentForm