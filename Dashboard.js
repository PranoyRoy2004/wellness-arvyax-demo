import { useEffect, useState } from 'react';
import api from '../api';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const [sessions, setSessions] = useState([]);
  useEffect(() => {
    api.get('/sessions').then(res => setSessions(res.data));
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Public Wellness Sessions</h1>
      <Link to="/editor" className="btn mb-4">Create Session</Link>
      <div className="grid gap-4">
        {sessions.map(s => (
          <div key={s._id} className="card">
            <h2 className="font-bold">{s.title}</h2>
            <p>{s.tags.join(', ')}</p>
          </div>
        ))}
      </div>
    </div>
  );
}