import { useState } from 'react';

export default function BuscadorPeliculas() {
  const db = ['Interestelar', 'Inception', 'Matrix', 'Gladiador', 'Avatar', 'Titanic', 'Memento'];
  const [query, setQuery] = useState('');

  const filtradas = db.filter(p => p.toLowerCase().includes(query.toLowerCase()));

  const s = {
    box: { width: '100%', maxWidth: '300px', margin: '0 auto' },
    input: { width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.9rem', marginBottom: '10px', boxSizing: 'border-box' },
    list: { borderRadius: '8px', border: '1px solid #e2e8f0', backgroundColor: '#f8fafc', overflow: 'hidden' },
    item: { padding: '10px 14px', borderBottom: '1px solid #e2e8f0', fontSize: '0.9rem', color: '#334155' }
  };

  return (
    <div style={s.box}>
      <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Filtrar títulos..." style={s.input} />
      <div style={s.list}>
        {filtradas.length > 0 ? filtradas.map((p, i) => (
          <div key={i} style={{...s.item, borderBottom: i === filtradas.length - 1 ? 'none' : s.item.borderBottom}}>{p}</div>
        )) : (
          <div style={{...s.item, color: '#94a3b8', fontStyle: 'italic', textAlign: 'center'}}>No se encontraron resultados</div>
        )}
      </div>
    </div>
  );
}