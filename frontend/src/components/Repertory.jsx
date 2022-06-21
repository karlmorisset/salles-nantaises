import { Link } from "react-router-dom";
import data from "../data/data";

function Repertory() {
  return (
    <div>
      <h1> Répertoire des salles nantaises</h1>
      <ul>
        {data.map((salle) => (
          <li key={salle.recordid}>
            <Link to={`/salles/${salle.recordid}`}>
              {salle.fields.nom_cplet_lieu}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Repertory;
