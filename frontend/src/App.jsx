/* eslint-disable import/no-unresolved */
import Repertory from "@components/Repertory";
import Salle from "@components/Salle";
import { Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Repertory />} />
        <Route path="/salles/:id" element={<Salle />} />
      </Routes>
    </div>
  );
}

export default App;
