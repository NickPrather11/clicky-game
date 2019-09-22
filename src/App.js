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
    images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg"]
  };

  render() {
    const { score, topScore, images } = this.state;
    return (
      <div>
        <Header score={score} topScore={topScore} />
        <Wrapper>
          {images.map((image, index) => (
            <PicCard pic={image} id={index} />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
