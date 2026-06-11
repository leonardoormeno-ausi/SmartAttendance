import { useState } from 'react'

function StudentForm() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [course, setCourse] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const newStudent = {
      firstName,
      lastName,
      course,
      email,
    }

    console.log('Nuevo alumno:', newStudent)

    alert('Alumno creado (solo frontend)')

    setFirstName('')
    setLastName('')
    setCourse('')
    setEmail('')
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