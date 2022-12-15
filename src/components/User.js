import { useState } from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { generateBackgroundColorOfCard } from "../util/util";

export default function User({ user }) {
  const [avtar, setAvtar]=useState('../public/assets/male-avatar-boy-face-man-user-5-svgrepo-com.svg')
  const { name, img, gender, email, phone, age } = user;
  // console.log("user=", user);
  return (
    <div className={`card ${generateBackgroundColorOfCard()}`}>
      <h2 className="card__title">{name}</h2>
      <div className="user__image">
        <img src={img} loading={"lazy"} alt="avatar" />
      </div>
      <div className="gender__age">
        <div className="gender">{gender}&sbquo;</div>
        <div>{age} Years old</div>
      </div>
      <div className="mail__phone">
        <div className="mail">
          <AiOutlineMail fontSize="20px" color="#f2f2f2" />
          <span>{email}</span>
        </div>
        <div className="phone">
          <AiOutlinePhone fontSize="20px" color="#f2f2f2" />
          <span>{phone}</span>
        </div>
      </div>
    </div>
  );
}
