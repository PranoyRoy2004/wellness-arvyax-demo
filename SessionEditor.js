import { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../api';
import toast from 'react-hot-toast';
import debounce from 'lodash.debounce';

export default function SessionEditor() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ title: '', tags: '', json_file_url: '' });

  const load = async () => {
    if (!id) return;
    const { data } = await api.get(`/sessions/my`);
    const found = data.find(s => s._id === id);
    if (found) setForm({ ...found, tags: found.tags.join(', ') });
  };

  useEffect(() => { load(); }, [id]);

  const saveDraft = useCallback(
    debounce(async (body) => {
      await api.post('/sessions/save-draft', body);
      toast.success('Auto-saved');
    }, 5000), []
  );

  useEffect(() => {
    if (form.title) saveDraft({ ...form, tags: form.tags.split(',').map(t => t.trim()) });
  }, [form, saveDraft]);

  const publish = async () => {
    const { data: saved } = await api.post('/sessions/save-draft', { ...form, tags: form.tags.split(',').map(t => t.trim()) });
    await api.post('/sessions/publish', { id: saved._id });
    toast.success('Published');
    navigate('/');
  };

  return (
    <div className="max-w-2xl mx-auto p-8 space-y-4">
      <h1 className="text-2xl font-bold">Session Editor</h1>
      <input className="input" placeholder="Title" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} />
      <input className="input" placeholder="Tags (comma separated)" value={form.tags} onChange={e => setForm({ ...form, tags: e.target.value })} />
      <input className="input" placeholder="JSON file URL" value={form.json_file_url} onChange={e => setForm({ ...form, json_file_url: e.target.value })} />
      <button onClick={publish} className="btn">Publish</button>
    </div>
  );
}