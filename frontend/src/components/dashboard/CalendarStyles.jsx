import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '@/styles/calendar-custom.css';

export default function CalendarStyles() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="bg-[#1f2937]/80 rounded-xl p-4 shadow-md w-full">
      <Calendar
        onChange={setDate}
        value={date}
        locale="pt-BR"
        className="modern-calendar"
        prevLabel="❮"
        nextLabel="❯"
        prev2Label={null}
        next2Label={null}
      />
    </div>
  );
}
