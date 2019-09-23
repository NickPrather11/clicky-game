import React from "react";
import "../css/picCard.css";

const PicCard = ({ pic, id, handleImgClick }) => {
  return (
    <div className="picCard">
      <img src={require("../images/" + pic)} id={id} onClick={() => handleImgClick(id)} alt="" />
      <p>IMG {id}</p>
    </div>
  );
};

export default PicCard;
