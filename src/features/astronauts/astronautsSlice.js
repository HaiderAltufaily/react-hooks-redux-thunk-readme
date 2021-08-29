// Action Creators
export function fetchAstronauts() {
  return function (dispatch) {
    dispatch({ type: "astronauts/astronautsLoading" });
    fetch("http://api.open-notify.org/astros.json")
      .then((response) => response.json())
      .then((astronauts) =>
        dispatch({
          type: "astronauts/astronautsLoaded",
          payload: astronauts.people,
        })
      );
  };
}

// Reducers
const initialState = {
  isLoading: false,
  entities: [], //array of astronauts
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "astronauts/astronautsLoaded":
      return {
        ...state,
        entities: action.payload,
        isLoading: false,
      };
    case "astronauts/astronautsLoading":
      return {
        ...state,
        isLoading: true,
      };

    default:
      return state;
  }
}
