import "./Main.scss";
import customize from "../../Assets/Images/Customize.png";
import userBobur from "../../Assets/Images/user__bobur.jpg";
import frame from "../../Assets/Images/Frame.png";
import Button from "../Button/Button";
function Main() {
  return (
    <main className="main">
      <section className="hero">
        <h2 className="hero__title">Home</h2>
        <select>
          <option value="light">Light mode</option>
          <option value="dark">Dark mode</option>
        </select>
        <select>
          <option value="uz">UZ</option>
          <option value="ru">RU</option>
          <option value="en">EN</option>
        </select>
        <img src={customize} alt="" />
      </section>
      <section className="feedback">
        <div className="feedback__user">
          <img src={userBobur} alt="" width={60} height={60} />
          <p className="feedback__desc">What’s happening</p>
        </div>
        <a href="#link">
          <img className="feedback__collection" src={frame} alt="" />
        </a>
        <Button color={"blue"} disabled={true}>
          Tweet
        </Button>
      </section>
    </main>
  );
}

export default Main;
