import React from "react";
import "../css/picCard.css";

const PicCard = ({ pic, id }) => {
  return (
    <div className="picCard">
      <img src={require("../images/" + pic)} id={id} alt="" />
    </div>
  );
};

export default PicCard;
