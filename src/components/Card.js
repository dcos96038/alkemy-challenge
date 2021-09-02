import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { actionAddOne, actionRemoveOne } from "../reducers/teamReducer";

const Card = ({ hero }) => {
  const herosIds = useSelector((state) => state.team);
  const dispatch = useDispatch();

  const addHero = (alignment, id) => {
    dispatch(actionAddOne(alignment, id));
  };

  const removeHero = (alignment, id) => {
    dispatch(actionRemoveOne(alignment, id));
  };

  return (
    <>
      <div className="card" style={{ width: "17rem", height: "fit-content" }}>
        <img src={hero.image.url} className="w-100" alt={hero.name} />
        <ul className="list-group list-group-flush">
          <li className="list-group-item list-group-item-primary">
            {hero.name}
          </li>
          <ul className="list-group">
            <li className="list-group-item list-group-item-success">
              <strong>Powerstats:</strong>
            </li>
            <li className="list-group-item list-group-item-success">
              Combat:
              {hero.powerstats.combat !== "null" ? (
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${hero.powerstats.combat}%` }}
                    aria-valuenow={hero.powerstats.combat}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    {hero.powerstats.combat}%
                  </div>
                </div>
              ) : (
                " Unknown"
              )}
            </li>
            <li className="list-group-item list-group-item-success">
              Durability:
              {hero.powerstats.durability !== "null" ? (
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${hero.powerstats.durability}%` }}
                    aria-valuenow={hero.powerstats.durability}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    {hero.powerstats.durability}%
                  </div>
                </div>
              ) : (
                " Unknown"
              )}
            </li>
            <li className="list-group-item list-group-item-success">
              Intelligence:
              {hero.powerstats.intelligence !== "null" ? (
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${hero.powerstats.intelligence}%` }}
                    aria-valuenow={hero.powerstats.intelligence}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    {hero.powerstats.intelligence}%
                  </div>
                </div>
              ) : (
                " Unknown"
              )}
            </li>
            <li className="list-group-item list-group-item-success">
              Power:
              {hero.powerstats.power !== "null" ? (
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${hero.powerstats.power}%` }}
                    aria-valuenow={hero.powerstats.power}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    {hero.powerstats.power}%
                  </div>
                </div>
              ) : (
                " Unknown"
              )}
            </li>
            <li className="list-group-item list-group-item-success">
              Speed:
              {hero.powerstats.speed !== "null" ? (
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${hero.powerstats.speed}%` }}
                    aria-valuenow={hero.powerstats.speed}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    {hero.powerstats.speed}%
                  </div>
                </div>
              ) : (
                " Unknown"
              )}
            </li>
            <li className="list-group-item list-group-item-success">
              Strength:
              {hero.powerstats.strength !== "null" ? (
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${hero.powerstats.strength}%` }}
                    aria-valuenow={hero.powerstats.strength}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    {hero.powerstats.strength}%
                  </div>
                </div>
              ) : (
                " Unknown"
              )}
            </li>
          </ul>
        </ul>
        <div className="container py-3 d-flex align-items-center bg-secondary text-white d-flex justify-content-between">
          <button className="btn btn-primary">
            <Link
              to={`/details/${hero.id}`}
              className="text-decoration-none text-white"
            >
              Detalles
            </Link>
          </button>
          {herosIds.goods.includes(Number(hero.id)) ||
          herosIds.bads.includes(Number(hero.id)) ? (
            <button
              onClick={() =>
                removeHero(hero.biography.alignment, Number(hero.id))
              }
              className="btn btn-danger"
            >
              Eliminar
            </button>
          ) : (
            <button
              onClick={() => addHero(hero.biography.alignment, Number(hero.id))}
              className="btn btn-success"
            >
              Agregar
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Card;
