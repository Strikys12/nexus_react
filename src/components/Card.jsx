export default function Card({ nombre, semestres, color }) {
  return (
    <div className={`program ${color}`}>
      <p>{nombre}</p>
      <span>{semestres}</span>
    </div>
  );
}