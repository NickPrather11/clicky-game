import React, { Component } from "react";
import "./App.css";
import PicCard from "./components/picCard";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";

class App extends Component {
  state = {
    score: 0,
    topScore: 0,
    message: "Click an image to begin!",
    clicked: [],
    images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg"]
  };

  handleImgClick = id => {
    console.log("You Clicked: " + this);
    const { score, topScore, clicked } = this.state;
    if (clicked.indexOf(id) > -1) {
      // HAS ALREADY BEEN CLICKED, LOSE GAME
      this.setState({ message: "You already clicked that one! CLICK ANY IMAGE TO START OVER", score: 0 });
    } else {
      this.setState({ score: score + 1 });
      clicked.push(id);
      if (topScore < score) {
        this.setState({ topScore: score });
      }
    }
  };

  render() {
    const { score, topScore, images, message } = this.state;
    return (
      <div>
        <Header score={score} topScore={topScore} message={message} />
        <Wrapper>
          {images.map((image, index) => (
            <PicCard key={image} pic={image} id={index} handleImgClick={this.handleImgClick} />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
