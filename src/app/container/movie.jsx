import { NavLink } from "react-router-dom";

const MovieContainer = () => {
  let movies = ["ABC", "NAME", "XYZ"];
  return (
    <div>
      <p>This is movie listing page</p>
      <NavLink to={"/"}>Home page</NavLink>
      {movies.map((item, index) => {
        return (
          <p key={index}>
            {item} <NavLink to={`/movies/${item}`}>View</NavLink>
          </p>
        );
      })}
    </div>
  );
};
export default MovieContainer;
