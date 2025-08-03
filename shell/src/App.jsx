import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <nav style={{ padding: '1rem', background: '#eee' }}>
        <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
        <Link to="/usuarios" style={{ marginRight: '1rem' }}>Usuários</Link>
        <Link to="/produtos" style={{ marginRight: '1rem' }}>Produtos</Link>
        <Link to="/pedidos">Pedidos</Link>
      </nav>

      <Routes>
        <Route path="/" element={<h2>Bem-vindo ao Shell</h2>} />
        <Route path="/usuarios" element={<Iframe src="http://localhost:5173" />} />
        <Route path="/produtos" element={<Iframe src="http://localhost:5174" />} />
        <Route path="/pedidos" element={<Iframe src="http://localhost:5175" />} />
      </Routes>
    </div>
  );
}

// Componente para embutir micro front-ends
function Iframe({ src }) {
  return (
    <iframe
      src={src}
      style={{ width: '100%', height: '90vh', border: 'none' }}
      title="Micro Front-End"
    />
  );
}

export default App;
