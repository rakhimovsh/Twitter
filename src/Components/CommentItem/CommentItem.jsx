import "./CommentItem.scss";
import likeImg from "../../Assets/Images/likelar.png";

function CommentItem({
  userImg,
  userName,
  userLink,
  time,
  children,
  image,
  imglink,
}) {
  return (
    <li className="commentItem">
      <img
        className="commentItem__userImg"
        src={userImg}
        alt=""
        width={60}
        height={60}
      />
      <div className="commentItem__inner">
        <h2 className="commentItem__title">
          {userName}{" "}
          <a className="commentItem__link" href="#link">
            <span>{userLink}</span>
          </a>
          .<span className="commentItem__time">{time}</span>
        </h2>
        <p className="commentItem__desc">{children}</p>
        <a className="commentItem__otherLink" href="#link">
          ...
        </a>
        {image ? <img src={imglink} alt="" /> : ""}
        <img className="commentItem__like" src={likeImg} alt="" />
      </div>
    </li>
  );
}

export default CommentItem;
