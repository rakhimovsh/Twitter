import "./NavbarItem.scss";

function NavbarItem({ imgLink, children, width, height }) {
  return (
    <li className="navbarItem">
      <a className="navbarItem__link" href="#link">
        <img
          className="navbarItem__img"
          src={imgLink}
          alt=""
          width={width}
          height={height}
        />
        {children}
      </a>
    </li>
  );
}
export default NavbarItem;
