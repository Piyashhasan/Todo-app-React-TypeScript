import { NavLink } from "react-router-dom";
import "./nav.css";

const NavBar = () => {
  return (
    <nav className="container navbar w-50 mt-4 px-3">
      <NavLink
        to="/"
        style={({ isActive }) => {
          return {
            color: isActive ? "#EE5876" : "black",
            borderBottom: isActive ? "1px solid #EE5876" : "",
          };
        }}
      >
        All
      </NavLink>
      <NavLink
        to="/active"
        style={({ isActive }) => {
          return {
            color: isActive ? "#EE5876" : "black",
            borderBottom: isActive ? "1px solid #EE5876" : "",
          };
        }}
      >
        Active
      </NavLink>

      <NavLink
        to="/complete"
        style={({ isActive }) => {
          return {
            color: isActive ? "#EE5876" : "black",
            borderBottom: isActive ? "1px solid #EE5876" : "",
          };
        }}
      >
        Complete
      </NavLink>
    </nav>
  );
};

export default NavBar;
