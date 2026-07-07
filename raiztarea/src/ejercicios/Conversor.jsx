import { useState } from 'react';

export default function Conversor() {
  const [tipo, setTipo] = useState('km-millas');
  const [valor, setValor] = useState(10);

  const calcular = () => {
    const num = parseFloat(valor) || 0;
    return tipo === 'km-millas' ? `${(num * 0.6213).toFixed(2)} millas` : `${((num * 9/5) + 32).toFixed(2)} °F`;
  };

  const s = {
    box: { width: '100%', maxWidth: '300px', margin: '0 auto' },
    select: { width: '100%', padding: '10px', marginBottom: '12px', borderRadius: '8px', border: '1px solid #cbd5e1', backgroundColor: '#fff', fontSize: '0.9rem' },
    input: { width: '100%', padding: '10px', marginBottom: '16px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.9rem', boxSizing: 'border-box' },
    res: { padding: '15px', backgroundColor: '#eff6ff', borderRadius: '8px', border: '1px solid #bfdbfe', color: '#1e40af', fontWeight: '700', textAlign: 'center', fontSize: '1.1rem' }
  };

  return (
    <div style={s.box}>
      <select value={tipo} onChange={e => setTipo(e.target.value)} style={s.select}>
        <option value="km-millas">Kilómetros a Millas</option>
        <option value="c-f">Celcius a Fahrenheit</option>
      </select>
      <input type="number" value={valor} onChange={e => setValor(e.target.value)} placeholder="Introduce el valor" style={s.input} />
      <div style={s.res}>{calcular()}</div>
    </div>
  );
}