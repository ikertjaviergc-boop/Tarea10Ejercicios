import { useState } from 'react';

export default function Formulario() {
  const [form, setForm] = useState({ nombre: '', email: '', edad: '' });
  const [registrado, setRegistrado] = useState(null);

  const s = {
    box: { width: '100%', maxWidth: '320px', margin: '0 auto' },
    input: { width: '100%', padding: '10px 12px', marginBottom: '12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.9rem', boxSizing: 'border-box' },
    btn: { width: '100%', padding: '10px', borderRadius: '8px', border: 'none', backgroundColor: '#2563eb', color: 'white', fontWeight: '600', cursor: 'pointer' },
    preview: { marginTop: '20px', padding: '14px', backgroundColor: '#f1f5f9', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '0.85rem', color: '#334155' }
  };

  return (
    <div style={s.box}>
      <form onSubmit={(e) => { e.preventDefault(); setRegistrado(form); }}>
        <input name="nombre" value={form.nombre} onChange={e => setForm({...form, nombre: e.target.value})} placeholder="Nombre Completo" style={s.input} required />
        <input name="email" type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="Correo Electrónico" style={s.input} required />
        <input name="edad" type="number" value={form.edad} onChange={e => setForm({...form, edad: e.target.value})} placeholder="Edad" style={s.input} required />
        <button type="submit" style={s.btn}>Registrar Usuario</button>
      </form>
      {registrado && (
        <div style={s.preview}>
          <p style={{ margin: '0 0 6px 0' }}><strong>Nombre:</strong> {registrado.nombre}</p>
          <p style={{ margin: '0 0 6px 0' }}><strong>Email:</strong> {registrado.email}</p>
          <p style={{ margin: '0 0 10px 0' }}><strong>Edad:</strong> {registrado.edad} años</p>
          <button onClick={() => { setForm({ nombre: '', email: '', edad: '' }); setRegistrado(null); }} style={{ background: 'none', border: 'none', color: '#ef4444', padding: 0, cursor: 'pointer', textDecoration: 'underline', fontSize: '0.8rem' }}>Limpiar Registro</button>
        </div>
      )}
    </div>
  );
}