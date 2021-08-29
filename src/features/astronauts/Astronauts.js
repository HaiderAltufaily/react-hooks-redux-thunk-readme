import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAstronauts } from "./astronautsSlice";

function Astronauts() {
  const dispatch = useDispatch();

  const astronauts = useSelector((state) => state.astronauts.entities);
  const isLoading = useSelector((state) => state.astronauts.isLoading);

  function handleClick() {
    // dispatch the action creator (see below!)
    dispatch(fetchAstronauts());
  }

  const astronautsList = astronauts.map((astro) => (
    <li key={astro.id}>{astro.name}</li>
  ));

  return (
    <div>
      <button onClick={handleClick}>Get Astronauts</button>
      {!isLoading ? astronautsList : <h1>Loading...</h1>}
    </div>
  );
}

export default Astronauts;
