import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { fetchEvents } from "../api";

export default function CalendarView({ user }) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents(1).then(setEvents); // календарь №1
  }, []);

  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      events={events}
    />
  );
}
