import React, { Component } from "react";
import "./App.css";
import PicCard from "./components/picCard";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";

class App extends Component {
  state = {
    score: 0,
    topScore: 0,
    clicked: [],
    images: [
      "../images/1.jpg",
      "../images/2.jpg",
      "../images/3.jpg",
      "../images/4.jpg",
      "../images/5.jpg",
      "../images/6.jpg",
      "../images/7.jpg",
      "../images/8.jpg",
      "../images/9.jpg"
    ]
  };

  render() {
    const { score, topScore, images } = this.state;
    return (
      <div>
        <Header score={score} topScore={topScore} />
        <Wrapper>
          {/* <img src={require("./images/1.jpg")} alt="" /> */}
          {images.map((image, index) => (
            <PicCard pic={image} id={index} />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
