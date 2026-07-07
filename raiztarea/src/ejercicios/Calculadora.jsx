import { useState } from 'react';

export default function Calculadora() {
  const [pantalla, setPantalla] = useState('');

  const clickDigito = (d) => setPantalla(pantalla + d);
  const limpiar = () => setPantalla('');
  
  const calcular = () => {
    try {
      const expresion = pantalla.replace(/÷/g, '/').replace(/×/g, '*');
      if (expresion.includes('/0')) {
        setPantalla('Error');
        return;
      }
      // Evalúa de forma segura la expresión matemática simple
      const resultado = new Function(`return ${expresion}`)();
      setPantalla(String(resultado));
    } catch {
      setPantalla('Error');
    }
  };

  // Estilos dedicados para la calculadora física tradicional
  const s = {
    carcasa: { backgroundColor: '#1e222b', padding: '24px', borderRadius: '24px', width: '280px', margin: '0 auto', boxShadow: '0 10px 25px rgba(0,0,0,0.4)' },
    pantalla: { backgroundColor: '#0f1115', color: '#ffffff', padding: '20px', textRight: 'right', fontSize: '2rem', fontFamily: 'monospace', borderRadius: '12px', marginBottom: '20px', minHeight: '40px', textAlign: 'right', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' },
    grid: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' },
    btn: (tipo) => {
      let bg = '#3a3f4d'; // Números por defecto
      let color = '#ffffff';
      if (tipo === 'op') bg = '#f2a33c'; // Operadores naranja
      if (tipo === 'fn') bg = '#a5a5a5'; // Funciones arriba (gris claro)
      if (tipo === 'fn') color = '#000000';
      
      return {
        width: '54px', height: '54px', borderRadius: '50%', border: 'none', fontSize: '1.2rem', fontWeight: 'bold', cursor: 'pointer', backgroundColor: bg, color: color, transition: 'background-color 0.2s', display: 'flex', alignItems: 'center', justifyContent: 'center'
      };
    }
  };

  return (
    <div style={s.carcasa}>
      <div style={s.pantalla}>{pantalla || '0'}</div>
      <div style={s.grid}>
        {/* Fila 1 */}
        <button onClick={limpiar} style={s.btn('fn')}>C</button>
        <button onClick={() => clickDigito('(')} style={s.btn('fn')}>(</button>
        <button onClick={() => clickDigito(')')} style={s.btn('fn')}>)</button>
        <button onClick={() => clickDigito('÷')} style={s.btn('op')}>÷</button>

        {/* Fila 2 */}
        <button onClick={() => clickDigito('7')} style={s.btn('num')}>7</button>
        <button onClick={() => clickDigito('8')} style={s.btn('num')}>8</button>
        <button onClick={() => clickDigito('9')} style={s.btn('num')}>9</button>
        <button onClick={() => clickDigito('×')} style={s.btn('op')}>×</button>

        {/* Fila 3 */}
        <button onClick={() => clickDigito('4')} style={s.btn('num')}>4</button>
        <button onClick={() => clickDigito('5')} style={s.btn('num')}>5</button>
        <button onClick={() => clickDigito('6')} style={s.btn('num')}>6</button>
        <button onClick={() => clickDigito('-')} style={s.btn('op')}>-</button>

        {/* Fila 4 */}
        <button onClick={() => clickDigito('1')} style={s.btn('num')}>1</button>
        <button onClick={() => clickDigito('2')} style={s.btn('num')}>2</button>
        <button onClick={() => clickDigito('3')} style={s.btn('num')}>3</button>
        <button onClick={() => clickDigito('+')} style={s.btn('op')}>+</button>

        {/* Fila 5 */}
        <button onClick={() => clickDigito('0')} style={{...s.btn('num'), width: '120px', borderRadius: '30px', gridColumn: 'span 2'}}>0</button>
        <button onClick={() => clickDigito('.')} style={s.btn('num')}>.</button>
        <button onClick={calcular} style={s.btn('op')}>=</button>
      </div>
    </div>
  );
}