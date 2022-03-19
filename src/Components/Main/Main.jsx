import "./Main.scss";
import customize from "../../Assets/Images/Customize.png";
import userBobur from "../../Assets/Images/user__bobur.jpg";
import frame from "../../Assets/Images/Frame.png";
import Button from "../Button/Button";
import CommentItem from "../CommentItem/CommentItem";
import user__rajLohati from "../../Assets/Images/user__rajLohati.jpg";
import shashlik from "../../Assets/Images/shashlik.jpg";
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
        <Button color={"blue"} size={"medium"} position={"absolute"}>
          Tweet
        </Button>
      </section>
      <section className="comment">
        <ul className="comment__list">
          <CommentItem
            userName={"Designsta"}
            userImg={user__rajLohati}
            userLink={"@inner"}
            time={"22m"}
          >
            Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar
            zerikmadinglarmi?
          </CommentItem>
          <CommentItem
            userName={"cloutexhibition"}
            userImg={user__rajLohati}
            userLink={"@RajLahoti "}
            time={"22m"}
          >
            YPIP dasturining bu yilgi sezoni ham o’z nihoyasiga yetmoqda.
            Mentorlik davomida talaba va yangi bitiruvchilarni o’sayotganini
            ko’rib hursand bo’ladi odam.
          </CommentItem>
          <CommentItem
            userName={"CreativePhoto"}
            userImg={user__rajLohati}
            userLink={"@cloutexhibition "}
            time={"1h"}
            image={true}
            imglink={shashlik}
          >
            Обетда..... <br />
            Кечиринглар
          </CommentItem>
        </ul>
      </section>
    </main>
  );
}

export default Main;
