import React from "react";
import "../css/picCard.css";

const PicCard = ({ pic, id }) => {
  return (
    <div className="picCard">
      {/* <img src={require("../images/1.jpg")} id={id} alt="" />  THIS WORKS, BUT REPLACING STRING WITH PROP DOESN'T?*/}
      <img src={require(pic)} id={id} alt="" />
    </div>
  );
};

export default PicCard;
