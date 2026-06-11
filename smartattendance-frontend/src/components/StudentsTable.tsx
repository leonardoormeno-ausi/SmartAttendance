import type { Student } from '../types/Student'

type StudentsTableProps = {
  students: Student[]
  onDelete: (id: number) => void
}

function StudentsTable({
  students,
  onDelete,
}: StudentsTableProps) {
  return (
    <div className="bg-white rounded-xl shadow overflow-hidden">
      <table className="w-full">
        <thead className="bg-slate-200">
          <tr>
            <th className="p-3 text-left">ID</th>
            <th className="p-3 text-left">Nombre</th>
            <th className="p-3 text-left">Apellido</th>
            <th className="p-3 text-left">Curso</th>
            <th className="p-3 text-left">Email</th>
            <th className="p-3 text-left">Activo</th>
            <th className="p-3 text-left">Acciones</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr
              key={student.id}
              className="border-t"
            >
              <td className="p-3">{student.id}</td>
              <td className="p-3">{student.firstName}</td>
              <td className="p-3">{student.lastName}</td>
              <td className="p-3">{student.course}</td>
              <td className="p-3">{student.email}</td>
              <td className="p-3">
                {student.isActive ? 'Sí' : 'No'}
              </td>

              <td className="p-3">
                <button
                  className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                  onClick={() => onDelete(student.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default StudentsTable