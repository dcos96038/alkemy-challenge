import { useContext, useEffect, useState } from "react";
import { AppContext } from "../Context/AppContext";
import { getAppearance, getPowerstats } from "../services";
import Stat from "./Stat";

const TeamStats = () => {
  const [totalStats, setTotalStats] = useState([]);
  const [average, setAverage] = useState([]);

  const { teamIDS } = useContext(AppContext);

  useEffect(() => {
    async function getStatsList() {
      const array = [...teamIDS.goods, ...teamIDS.bads];
      const response = await getPowerstats(array);
      if (response) {
        setTotalStats(response);
      }
    }
    async function getAverageList() {
      const array = [...teamIDS.goods, ...teamIDS.bads];
      const response = await getAppearance(array);
      if (response) {
        setAverage(response);
      }
    }
    if (teamIDS) {
      getStatsList();
      getAverageList();
    } else {
      setTotalStats([]);
      setAverage([]);
    }
  }, [teamIDS]);

  if (
    totalStats === [] ||
    totalStats.length <= 0 ||
    average === [] ||
    average.length <= 0
  ) {
    return (
      <div className="container border rounded border-2 text-white pt-3 pb-2">
        <h2 className="text-center">
          Team
          <strong className="text-primarty text-uppercase"> stats</strong>
        </h2>
        <h3 className="text-center py-4">
          Elige a tu equipo para ver tus estadisticas!
        </h3>
      </div>
    );
  }

  return (
    <div className="container border rounded border-2 text-white pt-3 pb-2">
      <h2 className="text-center">
        Team{" "}
        <strong className="text-warning text-uppercase">
          {totalStats[0][0]}
        </strong>
      </h2>
      {totalStats.map((stat, index) => {
        return <Stat key={index} name={stat[0]} value={stat[1]} />;
      })}
      <div className="row my-3 justify-content-center">
        <div className="col-md-2">
          <h4>Peso promedio:</h4>
        </div>
        <div className="col-md-8">
          <h4 className="fw-bold text-warning">
            {(
              average[1][1] / [...teamIDS.goods, ...teamIDS.bads].length
            ).toFixed(2)}{" "}
            KG
          </h4>
        </div>
      </div>
      <div className="row my-3 justify-content-center">
        <div className="col-md-2">
          <h4>Altura promedio:</h4>
        </div>
        <div className="col-md-8">
          <h4 className="fw-bold text-warning">
            {(
              average[0][1] / [...teamIDS.goods, ...teamIDS.bads].length
            ).toFixed(2)}{" "}
            CM
          </h4>
        </div>
      </div>
    </div>
  );
};

export default TeamStats;
