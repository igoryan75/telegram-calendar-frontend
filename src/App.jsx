import React, { useEffect, useState } from "react";
import CalendarView from "./components/CalendarView";
import { initTelegram } from "./telegram";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const u = initTelegram();
    setUser(u);
  }, []);

  if (!user) return <div>Loading...</div>;

  return (
    <div style={{ padding: 20 }}>
      <h2>Календарь</h2>
      <CalendarView user={user} />
    </div>
  );
}

export default App;
