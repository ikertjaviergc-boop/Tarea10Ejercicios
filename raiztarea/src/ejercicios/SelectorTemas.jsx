export default function SelectorTemas({ temaActual, alCambiarTema }) {
  const s = {
    container: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px', padding: '20px' },
    grupoBotones: { display: 'flex', gap: '10px' },
    btn: (activo, colorBg) => ({
      padding: '10px 20px', borderRadius: '8px', border: activo ? '2px solid #2563eb' : '1px solid #ccc', cursor: 'pointer', backgroundColor: colorBg, color: colorBg === '#ffffff' ? '#000000' : '#ffffff', fontWeight: 'bold', transition: '0.2s'
    })
  };

  return (
    <div style={s.container}>
      <p style={{ margin: 0, fontSize: '1rem', color: '#2563eb' }}>
        Tema seleccionado: <strong>{temaActual === 'oscuro' ? 'Oscuro' : 'Claro'}</strong>
      </p>
      <div style={s.grupoBotones}>
        <button 
          style={s.btn(temaActual === 'claro', '#ffffff')} 
          onClick={() => alCambiarTema('claro')}
        >
          Modo Claro
        </button>
        <button 
          style={s.btn(temaActual === 'oscuro', '#1e293b')} 
          onClick={() => alCambiarTema('oscuro')}
        >
          Modo Oscuro
        </button>
      </div>
    </div>
  );
}