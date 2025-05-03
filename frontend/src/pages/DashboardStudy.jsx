import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from '@/services/axios'
import { Plus } from 'lucide-react'
import StudyRouteCard from '@/components/StudyRouteCard'

export default function DashboardStudy() {
  const [routes, setRoutes] = useState([])

  useEffect(() => {
    const fetchRoutes = async () => {
      try {
        const res = await axios.get('/study')
        setRoutes(res.data)
      } catch (err) {
        console.error('Erro ao buscar trilhas:', err)
      }
    }
    fetchRoutes()
  }, [])

  return (
    <div className="p-6 max-w-[1300px] mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Trilhas de Estudos {routes.length ? `(${routes.length})` : ''}</h1>
        <Link to="/dashboard/study/new">
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 flex items-center gap-2">
            <Plus size={18} /> Nova Trilha
          </button>
        </Link>
      </div>

      {routes.length === 0 ? (
        <p className="text-gray-500 mt-8">Nenhuma trilha cadastrada ainda.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {routes.map((route) => (
            <StudyRouteCard key={route.id} route={route} />
          ))}
        </div>
      )}
    </div>
  )
}
