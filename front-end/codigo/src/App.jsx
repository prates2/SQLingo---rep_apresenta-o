
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import Commands from './pages/Commands/Commands';
import Activity from './pages/Activity/Activity';
import Jogadores from './pages/Jogadores/Jogadores';
import Login from './pages/Login/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login na raiz */}
        <Route path="/" element={<Login />} />

        {/* Páginas internas */}
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/comandos" element={<Commands />} />
          <Route path="/jogadores" element={<Jogadores />} />
          <Route path="/atividade/:idLista" element={<Activity />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
