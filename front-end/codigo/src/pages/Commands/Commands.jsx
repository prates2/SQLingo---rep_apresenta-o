import './Commands.css';

export default function Commands() {
  const comandosDML = ["SELECT", "ORDER BY", "UPDATE", "WHERE", "JOIN", "GROUP BY"];
  const comandosDDL = [];

  const renderSection = (titulo, lista) => (
    <div className="secao-comandos">
      <h1>{titulo}</h1>
      <ul>
        {lista.map((comando, index) => (
          <li key={index}>
            <button className="btn-comando">{comando}</button>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <section id="comandos">
      {renderSection("Dicionário de Comandos", comandosDML)}
      
    </section>
  );
}