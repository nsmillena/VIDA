import { Heart, Clock, BookOpen } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function StudyRouteCard({ route }) {
  const completed = route.topics?.filter(t => t.completed).length || 0
  const total = route.topics?.length || 0
  const progress = total ? Math.round((completed / total) * 100) : 0

  return (
    <Link to={`/dashboard/study/${route.id}`}>
      <div className="p-4 bg-white/10 backdrop-blur rounded-xl shadow hover:shadow-lg transition cursor-pointer">
        <div className="flex justify-between items-start mb-2">
          <h2 className="text-lg font-semibold text-white">{route.title}</h2>
          <Heart size={18} className="text-gray-400" />
        </div>
        <p className="text-sm text-gray-400 mb-4">{route.area}</p>
        <div className="flex justify-between text-xs text-gray-400">
          <div className="flex items-center gap-1">
            <Clock size={14} /> {progress}%
          </div>
          <div className="flex items-center gap-1">
            <BookOpen size={14} /> {total}
          </div>
        </div>
      </div>
    </Link>
  )
}