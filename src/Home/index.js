import { useEffect, useState } from "react";
import CardsList from "../components/CardsList";
import TeamStats from "../components/TeamStats";
import { getHeros } from "../services";
import { useSelector, useDispatch } from "react-redux";
import { actionAddAll } from "../reducers/teamReducer";

const Home = () => {
  const [team, setTeam] = useState({});
  const [loading, setLoading] = useState(true);
  const herosIds = useSelector((state) => state.team);
  const dispatch = useDispatch();

  useEffect(() => {
    const heroList = window.localStorage.getItem("teamList");
    if (heroList) {
      const list = JSON.parse(heroList);
      dispatch(actionAddAll(list));
    }
  }, [dispatch]);

  useEffect(() => {
    async function getHerosList() {
      if (herosIds) {
        const array = [...herosIds.goods, ...herosIds.bads];
        const response = await getHeros(array);
        if (response) {
          setTeam(response);
          setLoading(false);
        }
      }
    }
    getHerosList();
  }, [herosIds]);

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
        <TeamStats team={herosIds} />
      </div>
      <CardsList team={team} />
    </>
  );
};

export default Home;
