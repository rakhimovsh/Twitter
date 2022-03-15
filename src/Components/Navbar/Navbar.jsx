import "./Navbar.scss";
import logoTwitter from "../../Assets/Images/twitter-logo.svg";
import NavbarItem from "../NavbarItem/NavbarItem";
import homeLogo from "../../Assets/Images/homeIcon.png";
import exploreLogo from "../../Assets/Images/explore.png";
import notificationsLogo from "../../Assets/Images/notification.png";
import messagesLogo from "../../Assets/Images/messages.png";
import bookmarksLogo from "../../Assets/Images/bookmarks.png";
import profileLogo from "../../Assets/Images/profile.png";
import listsLogo from "../../Assets/Images/lists.png";
import moreLogo from "../../Assets/Images/more.png";
import Button from "../Button/Button";
import userBobur from "../../Assets/Images/user__bobur.jpg";

const Navbar = () => {
  return (
    <div className="navbar">
      <a className="navbar__logo-link" href="#index">
        <img
          className="navbar__logo"
          src={logoTwitter}
          alt="Logo twitter"
          width={40}
          height={33}
        />
      </a>
      <ul className="navbar__list">
        <NavbarItem imgLink={homeLogo} width={28} height={28}>
          Home
        </NavbarItem>
        <NavbarItem imgLink={exploreLogo} width={28} height={28}>
          Explore
        </NavbarItem>
        <NavbarItem imgLink={notificationsLogo} width={28} height={28}>
          Notifications
        </NavbarItem>
        <NavbarItem imgLink={messagesLogo} width={28} height={28}>
          Messages
        </NavbarItem>
        <NavbarItem imgLink={bookmarksLogo} width={28} height={28}>
          Bookmarks
        </NavbarItem>
        <NavbarItem imgLink={listsLogo} width={28} height={28}>
          Lists
        </NavbarItem>
        <NavbarItem imgLink={profileLogo} width={28} height={28}>
          Profile
        </NavbarItem>
        <NavbarItem imgLink={moreLogo} width={28} height={28}>
          More
        </NavbarItem>
      </ul>
      <Button color={"blue"}>Tweet</Button>

      <div className="navbar__user">
        <img
          className="navbar__user--img"
          src={userBobur}
          alt=""
          width={50}
          height={50}
        />
        <a className="navbar__user--name" href="#user">
          Bobur <span>@bobur_mavlonov</span>
        </a>
        <a className="navbar__user--more" href="#user">
          ...
        </a>
      </div>
    </div>
  );
};

export default Navbar;
