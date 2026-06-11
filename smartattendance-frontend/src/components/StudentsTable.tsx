import type { Student } from '../types/Student'

type StudentsTableProps = {
  students: Student[]
}

function StudentsTable({ students }: StudentsTableProps) {
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default StudentsTable