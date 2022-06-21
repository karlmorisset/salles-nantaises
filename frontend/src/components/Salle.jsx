/* eslint-disable camelcase */
import { Link, useParams } from "react-router-dom";
import data from "../data/data";

function Salle() {
  const { id } = useParams();
  const salle = data.find((lieu) => lieu.recordid === id);
  const { nom_cplet_lieu, adresse_lieu, telephone, infos_pratiques } =
    salle.fields;

  return (
    <div>
      <div
        style={{
          backgroundColor: "purple",
          color: "white",
          padding: 20,
          width: 350,
          height: 500,
          marginBottom: 10,
        }}
      >
        <Link to="/">Retour à liste</Link>
        <h3>{nom_cplet_lieu}</h3>

        <div>
          <h4>Adresse: {adresse_lieu}</h4>
          <h4>Téléphone: {telephone}</h4>
          <h4>Infos pratiques: {infos_pratiques}</h4>
        </div>
      </div>
    </div>
  );
}
export default Salle;
