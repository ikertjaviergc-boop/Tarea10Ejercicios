export default function ServiceCard({ titulo, descripcion, icono }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px', margin: '1rem', flex: '1' }}>
      <div style={{ fontSize: '2rem' }}>{icono}</div>
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
    </div>
  );
}