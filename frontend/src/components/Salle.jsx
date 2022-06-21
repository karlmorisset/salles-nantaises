/* eslint-disable camelcase */

function Salle() {
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
        {/* Faire un lien pour retourner à la liste des lieux */}
        {/* <h3>Nom du lieu</h3> */}

        <div>
          <h4>Adresse: </h4>
          <h4>Téléphone: </h4>
          <h4>Infos pratiques: </h4>
        </div>
      </div>
    </div>
  );
}
export default Salle;
