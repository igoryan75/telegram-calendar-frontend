const API_URL = "https://YOUR-BACKEND.onrender.com";

export async function fetchEvents(calendarId) {
  const res = await fetch(`${API_URL}/events?calendarId=${calendarId}`);
  return res.json();
}

export async function createEvent(data) {
  const res = await fetch(`${API_URL}/events`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  return res.json();
}
