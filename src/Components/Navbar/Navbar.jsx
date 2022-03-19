import "./Navbar.scss";
import React from "react";
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
import { Context as languagesContext } from "../Context/LanguagesContext";
import languages from "../../Localization/Loclization";

const Navbar = () => {
  const { lang, setLang } = React.useContext(languagesContext);
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
          {languages[lang].navbar.navItem1}
        </NavbarItem>
        <NavbarItem imgLink={exploreLogo} width={28} height={28}>
          {languages[lang].navbar.navItem2}
        </NavbarItem>
        <NavbarItem imgLink={notificationsLogo} width={28} height={28}>
          {languages[lang].navbar.navItem3}
        </NavbarItem>
        <NavbarItem imgLink={messagesLogo} width={28} height={28}>
          {languages[lang].navbar.navItem4}
        </NavbarItem>
        <NavbarItem imgLink={bookmarksLogo} width={28} height={28}>
          {languages[lang].navbar.navItem5}
        </NavbarItem>
        <NavbarItem imgLink={listsLogo} width={28} height={28}>
          {languages[lang].navbar.navItem6}
        </NavbarItem>
        <NavbarItem imgLink={profileLogo} width={28} height={28}>
          {languages[lang].navbar.navItem7}
        </NavbarItem>
        <NavbarItem imgLink={moreLogo} width={28} height={28}>
          {languages[lang].navbar.navItem8}
        </NavbarItem>
      </ul>
      <Button color={"blue"}>{languages[lang].navbar.button}</Button>

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
