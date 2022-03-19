import "./Footer.scss";
import Trends from "../Trends/Trends";
import MightLike from "../MightLike/MightLike";
function Footer() {
  return (
    <footer className="footer">
      <input
        className="footer__search"
        type="text"
        placeholder="Search Twitter"
      />
      <Trends />
      <MightLike />
      <p className="footer__bottom">
        Terms of Service Privacy Policy Cookie Policy <br />
        Imprint Ads Info More ··· © 2021 Twitter, Inc.
      </p>
    </footer>
  );
}

export default Footer;
