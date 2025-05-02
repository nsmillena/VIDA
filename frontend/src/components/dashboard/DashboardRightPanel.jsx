import CalendarStyled from './CalendarStyles';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import UserProfile from './UserProfile';
import RadioFilterGroup from './RadioFilterGroup';

export default function DashboardRightPanel() {
    const [showCalendars, setShowCalendars] = useState(true);
    const [showCategories, setShowCategories] = useState(true);

    return (
        <aside className="hidden xl:flex flex-col w-[320px] text-white px-6 py-8 space-y-6">
            <UserProfile />

            <CalendarStyled />

            <div className="bg-[#1f2937] rounded-xl p-4">
                <div
                    className="flex items-center justify-between cursor-pointer mb-2"
                    onClick={() => setShowCalendars(!showCalendars)}
                >
                    <span className="text-sm font-medium">Filtros</span>
                    {showCalendars ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </div>
                {showCalendars && <RadioFilterGroup />}
            </div>
            <div className="bg-[#1f2937] rounded-xl p-4">
                <div
                    className="flex items-center justify-between cursor-pointer mb-2"
                    onClick={() => setShowCategories(!showCategories)}
                >
                    <span className="text-sm font-medium">Legenda</span>
                    {showCategories ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </div>
                {showCategories && (
                    <div className="space-y-3 text-sm">
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-purple-500"></span>
                            Estudos
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-green-500"></span>
                            Finanças
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                            Saúde
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                            Tarefas
                        </div>
                    </div>
                )}
            </div>
        </aside>
    );
}
