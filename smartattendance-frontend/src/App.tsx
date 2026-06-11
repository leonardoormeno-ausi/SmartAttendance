import Header from './components/layout/Header'
import Sidebar from './components/layout/Sidebar'

import AppRoutes from './routes/AppRoutes'

function App() {
  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar />

      <div className="flex-1">
        <Header />

        <main className="p-6">
          <AppRoutes />
        </main>
      </div>
    </div>
  )
}

export default App