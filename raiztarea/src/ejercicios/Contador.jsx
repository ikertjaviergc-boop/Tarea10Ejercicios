import { useState } from 'react';

export default function Contador() {
  const [count, setCount] = useState(12);
  const [color, setColor] = useState('#2563eb');

  const s = {
    card: { textAlign: 'center', width: '260px', margin: '0 auto' },
    circle: { width: '110px', height: '110px', borderRadius: '50%', border: `4px solid ${color}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', fontWeight: '800', color: color, margin: '20px auto', transition: '0.3s' },
    palette: { display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '20px' },
    dot: (c) => ({ width: '16px', height: '16px', borderRadius: '50%', backgroundColor: c, border: color === c ? '2px solid #000' : 'none', cursor: 'pointer', transition: '0.2s' }),
    btnGroup: { display: 'flex', gap: '10px', marginBottom: '10px' },
    btn: (bg) => ({ flex: 1, padding: '10px', borderRadius: '8px', border: 'none', backgroundColor: bg, color: 'white', fontWeight: 'bold', fontSize: '1.2rem', cursor: 'pointer' }),
    btnReset: { width: '100%', padding: '8px', borderRadius: '8px', border: '1px solid #cbd5e1', backgroundColor: 'transparent', color: '#64748b', fontSize: '0.85rem', cursor: 'pointer', fontWeight: '500' }
  };

  return (
    <div style={s.card}>
      <div style={s.palette}>
        {['#ef4444', '#f97316', '#22c55e', '#2563eb', '#a855f7'].map(c => (
          <button key={c} onClick={() => setColor(c)} style={s.dot(c)} />
        ))}
      </div>
      <div style={s.circle}>{count}</div>
      <div style={s.btnGroup}>
        <button onClick={() => count > 0 && setCount(count - 1)} style={s.btn('#ef4444')}>-</button>
        <button onClick={() => setCount(count + 1)} style={s.btn('#22c55e')}>+</button>
      </div>
      <button onClick={() => setCount(0)} style={s.sbtnReset}>Reiniciar Base</button>
    </div>
  );
}