import { NavLink } from "react-router-dom";

const AboutContainer = () => {
  return (
    <p>
      This is about page
      <NavLink to={"/"}>Home page</NavLink>
    </p>
  );
};
export default AboutContainer;
