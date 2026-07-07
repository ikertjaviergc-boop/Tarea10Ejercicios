import { useState } from 'react';

export default function GeneradorFrases() {
  const [frases, setFrases] = useState([
    "El código limpio siempre habla por sí mismo.",
    "La persistencia convierte los bugs en aprendizaje.",
    "Abstrae el problema antes de estructurar el estado."
  ]);
  const [idx, setIdx] = useState(0);
  const [nueva, setNueva] = useState('');

  const s = {
    box: { width: '100%', maxWidth: '340px', margin: '0 auto', textAlign: 'center' },
    display: { padding: '20px', backgroundColor: '#f8fafc', borderLeft: '4px solid #2563eb', fontSize: '1rem', color: '#334155', fontStyle: 'italic', borderRadius: '0 8px 8px 0', marginBottom: '15px', textAlign: 'left' },
    btnNext: { padding: '8px 16px', backgroundColor: '#2563eb', color: 'white', border: 'none', borderRadius: '6px', fontSize: '0.85rem', fontWeight: '600', cursor: 'pointer', marginBottom: '20px' },
    form: { display: 'flex', gap: '6px' },
    input: { flex: 1, padding: '8px 10px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.85rem' },
    btnAdd: { padding: '8px 12px', backgroundColor: '#0f172a', color: 'white', border: 'none', borderRadius: '6px', fontSize: '0.85rem', cursor: 'pointer' }
  };

  return (
    <div style={s.box}>
      <div style={s.display}>"{frases[idx]}"</div>
      <button onClick={() => setIdx(Math.floor(Math.random() * frases.length))} style={s.btnNext}>Siguiente Sentencia</button>
      <form onSubmit={(e) => { e.preventDefault(); if(!nueva.trim()) return; setFrases([...frases, nueva]); setNueva(''); }} style={s.form}>
        <input value={nueva} onChange={e => setNueva(e.target.value)} placeholder="Agregar frase al repositorio..." style={s.input} />
        <button type="submit" style={s.btnAdd}>Añadir</button>
      </form>
    </div>
  );
}