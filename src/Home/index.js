import { useContext, useEffect, useState } from "react";
import CardsList from "../components/CardsList";
import TeamStats from "../components/TeamStats";
import { AppContext } from "../Context/AppContext";
import { getHeros } from "../services";

const Home = () => {
  const [team, setTeam] = useState({});
  const [loading, setLoading] = useState(true);

  const { teamIDS, setTeamIDS } = useContext(AppContext);

  useEffect(() => {
    const heroList = window.localStorage.getItem("teamList");
    if (heroList) {
      const list = JSON.parse(heroList);
      setTeamIDS(list);
    }
  }, [setTeamIDS]);

  useEffect(() => {
    async function getHerosList() {
      try {
        const array = [...teamIDS.goods, ...teamIDS.bads];
        const response = await getHeros(array);
        if (response) {
          setTeam(response);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getHerosList();
  }, [teamIDS]);

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

  return (
    <>
      <div className="mb-5">
        <TeamStats team={teamIDS} />
      </div>
      <CardsList team={team} />
    </>
  );
};

export default Home;
