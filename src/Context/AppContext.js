import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [teamIDS, setTeamIDS] = useState({
    goods: [],
    bads: [],
  });

  const handleTeam = (alignment, id) => {
    if (alignment === "good") {
      const array = teamIDS.goods.filter((heroId) => heroId !== id);
      if (teamIDS.goods.includes(id)) {
        const heros = {
          goods: array,
          bads: [...teamIDS.bads],
        };
        setTeamIDS(heros);
        window.localStorage.setItem("teamList", JSON.stringify(heros));
      }
      if (teamIDS.goods.length < 3 && !teamIDS.goods.includes(id)) {
        const heros = {
          goods: [...teamIDS.goods, id],
          bads: [...teamIDS.bads],
        };
        setTeamIDS(heros);
        window.localStorage.setItem("teamList", JSON.stringify(heros));
      }
    }
    if (alignment === "bad") {
      const array = teamIDS.bads.filter((heroId) => heroId !== id);
      if (teamIDS.bads.includes(id)) {
        const heros = {
          goods: [...teamIDS.goods],
          bads: array,
        };
        setTeamIDS(heros);
        window.localStorage.setItem("teamList", JSON.stringify(heros));
      }
      if (teamIDS.bads.length < 3 && !teamIDS.bads.includes(id)) {
        const heros = {
          goods: [...teamIDS.goods],
          bads: [...teamIDS.bads, id],
        };
        setTeamIDS(heros);
        window.localStorage.setItem("teamList", JSON.stringify(heros));
      }
    }
  };

  return (
    <AppContext.Provider
      value={{
        user,
        loading,
        teamIDS,
        setTeamIDS,
        setLoading,
        setUser,
        handleTeam,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
