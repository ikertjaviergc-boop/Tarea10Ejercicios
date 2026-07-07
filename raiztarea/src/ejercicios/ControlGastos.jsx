import { useState } from 'react';

export default function ControlGastos() {
  const [gastos, setGastos] = useState([
    { id: 1, desc: 'Licencia Desarrollo', monto: 12000 },
    { id: 2, desc: 'Hosting Servidor', monto: 8500 }
  ]);
  const [form, setForm] = useState({ desc: '', monto: '' });

  const total = gastos.reduce((acc, curr) => acc + curr.monto, 0);

  const s = {
    box: { width: '100%', maxWidth: '320px', margin: '0 auto' },
    form: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '15px' },
    input: { padding: '8px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.85rem' },
    btn: { gridColumn: 'span 2', padding: '8px', backgroundColor: '#f97316', color: 'white', border: 'none', borderRadius: '6px', fontWeight: '600', cursor: 'pointer' },
    item: { display: 'flex', justifyBetween: 'space-between', padding: '8px 0', borderBottom: '1px solid #f1f5f9', fontSize: '0.9rem', color: '#f97316' },
    totalBox: { textAlign: 'right', fontWeight: 'bold', fontSize: '1.1rem', color: '#f97316', marginTop: '12px' }
  };

  return (
    <div style={s.box}>
      <form onSubmit={(e) => { e.preventDefault(); if(!form.desc || !form.monto) return; setGastos([...gastos, { id: Date.now(), desc: form.desc, monto: parseFloat(form.monto) }]); setForm({ desc: '', monto: '' }); }} style={s.form}>
        <input value={form.desc} onChange={e => setForm({...form, desc: e.target.value})} placeholder="Item/Concepto" style={s.input} />
        <input type="number" value={form.monto} onChange={e => setForm({...form, monto: e.target.value})} placeholder="Monto ($)" style={s.input} />
        <button type="submit" style={s.btn}>Añadir Gasto</button>
      </form>
      <div>
        {gastos.map(g => (
          <div key={g.id} style={s.item}>
            <span>{g.desc}</span>
            <span>${g.monto} <button onClick={() => setGastos(gastos.filter(item => item.id !== g.id))} style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer', marginLeft: '6px' }}>&times;</button></span>
          </div>
        ))}
      </div>
      <div style={s.totalBox}>Costo Acumulado: ${total}</div>
    </div>
  );
}