import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getHero } from "../services";

const Details = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    async function getData() {
      const response = await getHero(id);
      if (response) {
        setData(response.data);
        setLoading(false);
      }
    }
    getData();
  }, [id]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <div
          className="spinner-border text-primary"
          style={{ width: "6rem", height: "6rem" }}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  console.log(data);

  return (
    <div className="container text-white">
      <h1 className="text-center mb-4">{data.name}</h1>
      <div className="container border rounded border-primary border-4 p-4">
        <div className="row">
          <div className="col-8 p-2 fs-5">
            <div className="row my-2">
              <div className="col-sm-3 text-warning">Peso: </div>
              <div className="col-sm-9">{data.appearance.weight[1]}</div>
            </div>
            <div className="row my-2">
              <div className="col-sm-3 text-warning">Altura: </div>
              <div className="col-sm-9">{data.appearance.height[1]}</div>
            </div>
            <div className="row my-2">
              <div className="col-sm-3 text-warning">Nombre: </div>
              <div className="col-sm-9">{data.biography["full-name"]}</div>
            </div>
            <div className="row my-2">
              <div className="col-sm-3 text-warning">Alias: </div>
              <div className="col-sm-9">
                {data.biography.aliases.map((e) => `${e}, `)}
              </div>
            </div>
            <div className="row my-2">
              <div className="col-sm-3 text-warning">Color de ojos: </div>
              <div className="col-sm-9">{data.appearance["eye-color"]}</div>
            </div>
            <div className="row my-2">
              <div className="col-sm-3 text-warning">Color de cabello: </div>
              <div className="col-sm-9">{data.appearance["hair-color"]}</div>
            </div>
            <div className="row my-2">
              <div className="col-sm-3 text-warning">Lugar de trabajo: </div>
              <div className="col-sm-9">{data.work.base}</div>
            </div>
          </div>
          <div className="col-4">
            <img
              src={data.image.url}
              alt={data.name}
              className="img-fluid border border-warning rounded"
            />
          </div>
        </div>
      </div>
      <div className="container d-flex justify-content-center mt-5">
        <button className="btn btn-primary" onClick={() => history.push("/")}>
          Volver a HOME
        </button>
      </div>
    </div>
  );
};

export default Details;
