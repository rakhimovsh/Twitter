import "./NavbarItem.scss";
import { NavLink } from "react-router-dom";

function NavbarItem({ imgLink, children, width, height, toThe }) {
  return (
    <li className="navbarItem">
      <NavLink className="navbarItem__link" to={toThe}>
        <img
          className="navbarItem__img"
          src={imgLink}
          alt=""
          width={width}
          height={height}
        />
        {children}
      </NavLink>
    </li>
  );
}
export default NavbarItem;
