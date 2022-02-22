import { NavLink } from "react-router-dom";

const HomeContainer = () => {
  return (
    <p>
      This is home page
      <NavLink to={"/about"}>About page</NavLink>
      <NavLink to={"/movies"}>movie page</NavLink>
    </p>
  );
};
export default HomeContainer;
