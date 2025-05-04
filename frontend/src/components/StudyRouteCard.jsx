import { Heart, Clock, BookOpen, Trash2, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function StudyRouteCard({ route, onDelete, onToggleFavorite }) {
  const completed = route.topics?.filter(t => t.completed).length || 0
  const total = route.topics?.length || 0
  const progress = total ? Math.round((completed / total) * 100) : 0
  const isCompleted = completed === total && total > 0

  return (
    <div className="relative group">
      {/* Ícones de ação no topo direito, fora do Link */}
      <div className="absolute top-3 right-3 flex gap-2 z-10">
        <button
          title={route.favorite ? "Desafixar trilha" : "Fixar trilha"}
          onClick={e => {
            e.stopPropagation()
            onToggleFavorite?.(route)
          }}
          className="transition"
        >
          <Heart
            size={18}
            className={
              route.favorite
                ? "text-pink-400 fill-pink-400"
                : "text-gray-400 group-hover:text-pink-400"
            }
          />
        </button>
        <button
          title="Excluir trilha"
          onClick={e => {
            e.stopPropagation()
            onDelete?.(route)
          }}
          className="transition"
        >
          <Trash2
            size={18}
            className="text-gray-400 hover:text-red-500"
          />
        </button>
      </div>

      <Link to={`/dashboard/study/${route.id}`}>
        <div
          className={`p-4 bg-white/10 backdrop-blur rounded-xl shadow hover:shadow-lg transition cursor-pointer h-full ${
            isCompleted ? 'border-2 border-green-500' : ''
          }`}
        >
          <div className="flex justify-between items-start mb-2">
            <h2 className="text-lg font-semibold text-white">{route.title}</h2>
            {/* Ícones removidos daqui, agora ficam absolutos no topo direito */}
          </div>
          <p className="text-sm text-gray-400 mb-4">{route.area}</p>
          <div className="flex justify-between text-xs text-gray-400">
            <div className="flex items-center gap-1">
              <Clock size={14} /> {progress}%
              {isCompleted && (
                <CheckCircle size={16} className="text-green-500 ml-1" />
              )}
            </div>
            <div className="flex items-center gap-1">
              <BookOpen size={14} /> {total}
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
