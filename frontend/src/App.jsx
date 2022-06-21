/* eslint-disable import/no-unresolved */
import Repertory from "@components/Repertory";

import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Ajouter le système de routage pour la liste et pour les salles individuelles */}
      <Repertory />
    </div>
  );
}

export default App;
