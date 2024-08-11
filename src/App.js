import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PaginaInicio from './pages/Inicio/PaginaInicio';
import PaginaNoticias from './pages/Noticias/PaginaNoticias';
import NoticiasIndividuales from './pages/Noticias/NoticiasIndividuales'
import PaginaComunidad from './pages/Comunidad/PaginaComunidad'
import PaginaProyectos from './pages/Proyectos/PaginaProyectos';
import ProyectosIndividuales from './pages/Proyectos/ProyectosIndividuales'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaginaInicio />} />
        <Route path='PaginaNoticias' element={<PaginaNoticias />} />
        <Route path='NoticiasIndividuales/:ids' element={<NoticiasIndividuales />} />
        <Route path='PaginaComunidad' element={<PaginaComunidad />} />
        <Route path='PaginaProyectos' element={<PaginaProyectos />} />
        <Route path='ProyectosIndividuales/:ids' element={<ProyectosIndividuales />} />
      </Routes>
    </Router>
  );
}

export default App;
