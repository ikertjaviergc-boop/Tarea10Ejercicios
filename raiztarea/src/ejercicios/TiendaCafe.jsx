import { useState } from 'react';

export default function TiendaCafe() {
  const menu = [
    { id: 'cap', nombre: 'Cappuccino', precio: 2500 },
    { id: 'lat', nombre: 'Latte Macchiato', precio: 2000 },
    { id: 'esp', nombre: 'Espresso Italiano', precio: 1500 }
  ];
  const [cart, setCart] = useState({});

  const total = Object.entries(cart).reduce((acc, [id, cant]) => acc + (menu.find(m => m.id === id).precio * cant), 0);

  const s = {
    box: { width: '100%', maxWidth: '340px', margin: '0 auto' },
    row: { display: 'flex', justifyBetween: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid #f1f5f9' },
    btn: { padding: '4px 10px', backgroundColor: '#2563eb', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' },
    resume: { marginTop: '20px', padding: '14px', backgroundColor: '#f8fafc', borderRadius: '10px', border: '1px solid #e2e8f0', fontSize: '0.85rem' }
  };

  return (
    <div style={s.box}>
      {menu.map(m => (
        <div key={m.id} style={s.row}>
          <span style={{ fontSize: '0.95rem', color: '#2563eb' }}>{m.nombre} <b style={{ color: '#64748b' }}>(${m.precio})</b></span>
          <button onClick={() => setCart({...cart, [m.id]: (cart[m.id] || 0) + 1})} style={s.btn}>+</button>
        </div>
      ))}
      {total > 0 && (
        <div style={s.resume}>
          <p style={{ margin: '0 0 8px 0', fontWeight: '700', color: '#2563eb' }}>Resumen de pedido:</p>
          {Object.entries(cart).map(([id, cant]) => (
            <div key={id} style={{ display: 'flex', justifyContent: 'space-between', color: '#475569', marginBottom: '4px' }}>
              <span>{menu.find(m => m.id === id).nombre} x{cant}</span>
              <button onClick={() => { const n = {...cart}; delete n[id]; setCart(n); }} style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer' }}>Quitar</button>
            </div>
          ))}
          <p style={{ margin: '10px 0 0 0', borderTop: '1px solid #cbd5e1', pt: '8px', fontWeight: 'bold', textAlign: 'right', fontSize: '1rem', color: '#0f172a' }}>Total: ${total}</p>
        </div>
      )}
    </div>
  );
}