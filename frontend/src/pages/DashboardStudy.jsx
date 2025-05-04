import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from '@/services/axios'
import { Plus } from 'lucide-react'
import StudyRouteCard from '@/components/StudyRouteCard'
import Sidebar from '@/components/dashboard/Sidebar'
import DashboardRightPanel from '@/components/dashboard/DashboardRightPanel'

export default function DashboardStudy() {
  const [routes, setRoutes] = useState([])

  useEffect(() => {
    const fetchRoutes = async () => {
      try {
        const res = await axios.get('/study-routes')
        setRoutes(res.data)
      } catch (err) {
        console.error('Erro ao buscar trilhas:', err)
      }
    }
    fetchRoutes()
  }, [])

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white">
      <Sidebar />

      <div className="flex flex-1 flex-col px-12 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">
            Trilhas de Estudos {routes.length ? `(${routes.length})` : ''}
          </h1>
          <Link to="/dashboard/study/new">
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 flex items-center gap-2">
              <Plus size={18} /> Nova Trilha
            </button>
          </Link>
        </div>

        {routes.length === 0 ? (
          <p className="text-gray-400 mt-8">Nenhuma trilha cadastrada ainda.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {routes.map((route) => (
              <StudyRouteCard key={route.id} route={route} />
            ))}
          </div>
        )}
      </div>

      <DashboardRightPanel />
    </div>
  )
}
