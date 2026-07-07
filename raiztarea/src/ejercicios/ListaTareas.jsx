import { useState } from 'react';

export default function ListaTareas() {
  const [tareas, setTareas] = useState([
    { id: 1, texto: 'Estudiar Estructuras en React', completada: true },
    { id: 2, texto: 'Optimizar Flujos de Estado', completada: false },
  ]);
  const [nueva, setNueva] = useState('');

  const s = {
    box: { width: '100%', maxWidth: '340px', margin: '0 auto' },
    form: { display: 'flex', gap: '8px', marginBottom: '15px' },
    input: { flex: 1, padding: '10px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.9rem' },
    btn: { padding: '0 16px', borderRadius: '8px', border: 'none', backgroundColor: '#10b981', color: 'white', fontWeight: 'bold', cursor: 'pointer' },
    li: { display: 'flex', alignItems: 'center', justifyBetween: 'space-between', padding: '10px 12px', backgroundColor: '#f8fafc', borderRadius: '8px', marginBottom: '6px', border: '1px solid #e2e8f0' },
    texto: (comp) => ({ cursor: 'pointer', textDecoration: comp ? 'line-through' : 'none', color: comp ? '#94a3b8' : '#334155', fontSize: '0.9rem', flex: 1 }),
    del: { background: 'none', border: 'none', color: '#ef4444', fontWeight: 'bold', cursor: 'pointer', fontSize: '1.1rem' }
  };

  return (
    <div style={s.box}>
      <form onSubmit={(e) => { e.preventDefault(); if(!nueva.trim()) return; setTareas([...tareas, { id: Date.now(), texto: nueva, completada: false }]); setNueva(''); }} style={s.form}>
        <input value={nueva} onChange={e => setNueva(e.target.value)} placeholder="Añadir nueva tarea..." style={s.input} />
        <button type="submit" style={s.btn}>+</button>
      </form>
      <div style={{ maxHh: '180px', overflowY: 'auto' }}>
        {tareas.map(t => (
          <div key={t.id} style={s.li}>
            <span onClick={() => setTareas(tareas.map(item => item.id === t.id ? {...item, completada: !item.completada} : item))} style={s.texto(t.completada)}>
              {t.texto}
            </span>
            <button onClick={() => setTareas(tareas.filter(item => item.id !== t.id))} style={s.del}>&times;</button>
          </div>
        ))}
      </div>
    </div>
  );
}