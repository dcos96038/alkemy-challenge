import Card from "./Card";

const CardsList = ({ team }) => {
  return (
    <div className="container text-white text-center">
      <h3>
        Orientacion: <strong className="text-success">Buena</strong>
      </h3>
      <div className="row mt-4">
        {team.goods.length > 0 ? (
          team.goods.map((hero) => {
            return (
              <div
                className="col-md-4 my-4 d-flex justify-content-center"
                key={hero.id}
              >
                <Card hero={hero} />
              </div>
            );
          })
        ) : (
          <h5>No tienes heroes todavia</h5>
        )}
      </div>
      <h3 className="mt-5">
        Orientacion: <strong className="text-danger">Mala</strong>
      </h3>
      <div className="row mt-4">
        {team.bads.length > 0 ? (
          team.bads.map((hero) => {
            return (
              <div
                className="col-md-4 my-4 d-flex justify-content-center"
                key={hero.id}
              >
                <Card hero={hero} />
              </div>
            );
          })
        ) : (
          <h5>No tienes heroes todavia</h5>
        )}
      </div>
    </div>
  );
};

export default CardsList;
