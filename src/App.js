import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>¡Bienvenido equipo!</h1>
        <p>
          Gerardo anda pedo y no sacó el jack 🤣
        </p>
        <p>
          Pero tranqui, ¡nosotros sí hicimos la app!
        </p>
        <img
          src="https://media.tenor.com/0voATfwCl2sAAAAM/jack-daniels-jd.gif" 
          alt="Cerveza animada"
          style={{ width: '200px', marginTop: '20px' }}
        />
        <a
          className="App-link"
          href="https://reactjs.org" 
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprende React igualito
        </a>
      </header>
    </div>
  );
}

export default App;