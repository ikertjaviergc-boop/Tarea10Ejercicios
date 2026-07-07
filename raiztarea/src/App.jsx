import { useState } from 'react';
import Contador from './ejercicios/Contador';
import Formulario from './ejercicios/Formulario';
import ListaTareas from './ejercicios/ListaTareas';
import Conversor from './ejercicios/Conversor';
import Calculadora from './ejercicios/Calculadora';
import TiendaCafe from './ejercicios/TiendaCafe';
import BuscadorPeliculas from './ejercicios/BuscadorPeliculas';
import GeneradorFrases from './ejercicios/GeneradorFrases';
import ControlGastos from './ejercicios/ControlGastos';
import SelectorTemas from './ejercicios/SelectorTemas';

function App() {
  const [ejercicioActivo, setEjercicioActivo] = useState('inicio');
  
  // Estado Global del Tema (Claro u Oscuro)
  const [tema, setTema] = useState('oscuro'); 

  const ejercicios = [
    { id: 'contador', nombre: 'Contador Interactivo' },
    { id: 'formulario', nombre: 'Formulario Simple' },
    { id: 'tareas', nombre: 'Lista de Tareas' },
    { id: 'conversor', nombre: 'Conversor de Unidades' },
    { id: 'calculadora', nombre: 'Calculadora' },
    { id: 'tienda', nombre: 'Tienda de Cafés' },
    { id: 'buscador', nombre: 'Buscador Películas' },
    { id: 'frases', nombre: 'Generador Frases' },
    { id: 'gastos', nombre: 'Control Gastos' },
    { id: 'temas', nombre: 'Selector de Temas' },
  ];

  const getComponente = () => {
    switch(ejercicioActivo) {
      case 'contador': return <Contador />;
      case 'formulario': return <Formulario />;
      case 'tareas': return <ListaTareas />;
      case 'conversor': return <Conversor />;
      case 'calculadora': return <Calculadora />;
      case 'tienda': return <TiendaCafe />;
      case 'buscador': return <BuscadorPeliculas />;
      case 'frases': return <GeneradorFrases />;
      case 'gastos': return <ControlGastos />;
      case 'temas': return <SelectorTemas temaActual={tema} alCambiarTema={setTema} />;
      default: return null;
    }
  };

  // Paletas Dinámicas controladas por JavaScript
  const esOscuro = tema === 'oscuro';
  const temaEstilos = {
    container: { fontFamily: 'Inter, system-ui, sans-serif', backgroundColor: esOscuro ? '#0f172a' : '#f8fafc', minHeight: '100vh', color: esOscuro ? '#f8fafc' : '#0f172a', padding: '20px', transition: 'background-color 0.3s, color 0.3s' },
    nav: { display: 'flex', gap: '10px', marginBottom: '40px', justifyContent: 'center', borderBottom: esOscuro ? '1px solid #334155' : '1px solid #e2e8f0', paddingBottom: '20px', flexWrap: 'wrap' },
    button: (active) => ({ padding: '10px 16px', borderRadius: '8px', border: 'none', cursor: 'pointer', backgroundColor: active ? '#2563eb' : (esOscuro ? '#1e293b' : '#e2e8f0'), color: active ? 'white' : (esOscuro ? '#cbd5e1' : '#334155'), fontWeight: '600', fontSize: '0.85rem', transition: '0.2s' }),
    card: { backgroundColor: esOscuro ? '#1e293b' : '#ffffff', padding: '40px', borderRadius: '16px', maxWidth: '800px', margin: '0 auto', boxShadow: esOscuro ? '0 20px 25px -5px rgba(0,0,0,0.4)' : '0 10px 15px -3px rgba(0,0,0,0.1)', border: esOscuro ? 'none' : '1px solid #e2e8f0', transition: 'background-color 0.3s, box-shadow 0.3s' }
  };

  return (
    <div style={temaEstilos.container}>
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5rem', margin: '0', fontWeight: '800' }}>React State Lab</h1>
        <p style={{ color: esOscuro ? '#94a3b8' : '#64748b', marginTop: '5px' }}>Sistema de gestión de ejercicios de estado</p>
      </header>

      <nav style={temaEstilos.nav}>
        <button style={temaEstilos.button(ejercicioActivo === 'inicio')} onClick={() => setEjercicioActivo('inicio')}>Inicio</button>
        {ejercicios.map(e => (
          <button key={e.id} style={temaEstilos.button(ejercicioActivo === e.id)} onClick={() => setEjercicioActivo(e.id)}>
            {e.nombre}
          </button>
        ))}
      </nav>

      <main style={temaEstilos.card}>
        {ejercicioActivo === 'inicio' ? (
          <div style={{ textAlign: 'center', padding: '20px' }}>
            <h2 style={{ fontSize: '1.8rem', margin: '0 0 10px 0' }}>Bienvenido al Laboratorio</h2>
            <p style={{ color: esOscuro ? '#94a3b8' : '#64748b' }}>Selecciona uno de los módulos estructurados en la barra superior para ejecutar su entorno interactivo.</p>
          </div>
        ) : (
          <div>
            <h2 style={{ borderBottom: '2px solid #2563eb', paddingBottom: '12px', marginTop: '0', color: esOscuro ? '#ffffff' : '#0f172a' }}>
              {ejercicios.find(e => e.id === ejercicioActivo).nombre}
            </h2>
            <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'center' }}>
              {getComponente()}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;