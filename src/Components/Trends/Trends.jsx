import "./Trends.scss";
import settings from "../../Assets/Images/settings.png";

function Trends() {
  return (
    <div className="trends">
      <div className="trends__top">
        <h2 className="trends__title">Trends for you</h2>
        <button className="trends__btn">
          <img src={settings} alt="" />
        </button>
      </div>
      <ul className="trends__list">
        <li className="trends__item">
          <p className="trends__country">Trending in Germany</p>
          <h3 className="trends__name">Revolution</h3>
          <p className="trends__tweet">50.4K Tweets</p>
          <button className="trends__otherBtn">...</button>
        </li>
        <li className="trends__item">
          <p className="trends__country">Trending in Germany</p>
          <h3 className="trends__name">Revolution</h3>
          <p className="trends__tweet">50.4K Tweets</p>
          <button className="trends__otherBtn">...</button>
        </li>
        <li className="trends__item">
          <p className="trends__country">Trending in Germany</p>
          <h3 className="trends__name">Revolution</h3>
          <p className="trends__tweet">50.4K Tweets</p>
          <button className="trends__otherBtn">...</button>
        </li>
      </ul>
      <button className="trends__showBtn">Show more</button>
    </div>
  );
}
export default Trends;
