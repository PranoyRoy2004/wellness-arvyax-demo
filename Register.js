import { useState } from 'react';
import api from '../api';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/auth/register', form);
      toast.success('Registered, please log in');
      navigate('/login');
    } catch {
      toast.error('Email already exists');
    }
  };

  return (
    <form onSubmit={submit} className="max-w-sm mx-auto mt-20 space-y-4">
      <h1 className="text-2xl font-bold">Register</h1>
      <input className="input" placeholder="Email" type="email" onChange={e => setForm({ ...form, email: e.target.value })} required />
      <input className="input" placeholder="Password" type="password" onChange={e => setForm({ ...form, password: e.target.value })} required />
      <button className="btn">Register</button>
    </form>
  );
}