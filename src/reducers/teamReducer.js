export const teamReducer = (state = null, action) => {
  const { type, payload } = action;

  if (type === "@team/addone") {
    if (payload.alignment === "good" && state.goods.length < 3) {
      const heros = {
        ...state,
        goods: [...state.goods, payload.id],
      };
      window.localStorage.setItem("teamList", JSON.stringify(heros));
      return heros;
    }
    if (payload.alignment === "bad" && state.bads.length < 3) {
      const heros = {
        ...state,
        bads: [...state.bads, payload.id],
      };
      window.localStorage.setItem("teamList", JSON.stringify(heros));
      return heros;
    }
    return { ...state };
  }

  if (type === "@team/removeone") {
    if (payload.alignment === "good" && state.goods.length > 0) {
      const array = state.goods.filter((heroId) => heroId !== payload.id);
      const heros = {
        ...state,
        goods: array,
      };
      window.localStorage.setItem("teamList", JSON.stringify(heros));
      return heros;
    }
    if (payload.alignment === "bad" && state.bads.length > 0) {
      const array = state.bads.filter((heroId) => heroId !== payload.id);
      const heros = {
        ...state,
        bads: array,
      };
      window.localStorage.setItem("teamList", JSON.stringify(heros));
      return heros;
    }
    return { ...state };
  }

  if (type === "@team/addall") {
    return {
      goods: payload.goods,
      bads: payload.bads,
    };
  }

  return state;
};

export const actionAddOne = (alignment, id) => {
  return {
    type: "@team/addone",
    payload: {
      alignment: alignment,
      id: id,
    },
  };
};

export const actionRemoveOne = (alignment, id) => {
  return {
    type: "@team/removeone",
    payload: {
      alignment: alignment,
      id: id,
    },
  };
};

export const actionAddAll = (content) => {
  return {
    type: "@team/addall",
    payload: {
      goods: content.goods,
      bads: content.bads,
    },
  };
};
