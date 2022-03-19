import "./MightLike.scss";
import user from "../../Assets/Images/user__rajLohati.jpg";
import Button from "../Button/Button";

function MightLike() {
  return (
    <div className="mightLike">
      <h3 className="mightLike__title">You might like</h3>
      <ul className="mightLike__list">
        <li className="mightLike__item">
          <img src={user} alt="" />
          <div className="mightLike__user">
            <h4 className="mightLike__name">Mushtariy</h4>
            <p className="mightLike__link">
              <a className="mightLike__link" href="#link">
                @Mushtar565266
              </a>
            </p>
          </div>
          <Button black={true}>Follow</Button>
        </li>
        <li className="mightLike__item">
          <img src={user} alt="" />
          <div className="mightLike__user">
            <h4 className="mightLike__name">Mushtariy</h4>
            <p className="mightLike__link">
              <a className="mightLike__link" href="#link">
                @Mushtar565266
              </a>
            </p>
          </div>
          <Button black={true}>Follow</Button>
        </li>
        <button className="mightLike__btn">Show more</button>
      </ul>
    </div>
  );
}

export default MightLike;
