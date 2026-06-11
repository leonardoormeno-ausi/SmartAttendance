import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 text-white min-h-screen p-4">
      <h2 className="text-xl font-bold mb-6">
        SmartAttendance
      </h2>

      <nav className="flex flex-col gap-3">
        <Link
          to="/"
          className="hover:text-sky-400"
        >
          Dashboard
        </Link>

        <Link
          to="/students"
          className="hover:text-sky-400"
        >
          Alumnos
        </Link>

        <Link
          to="/attendance"
          className="hover:text-sky-400"
        >
          Asistencias
        </Link>

        <Link
          to="/admin"
          className="hover:text-sky-400"
        >
          Administración
        </Link>
      </nav>
    </aside>
  )
}

export default Sidebar