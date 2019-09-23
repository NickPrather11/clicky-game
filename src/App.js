import React, { Component } from "react";
import "./App.css";
import PicCard from "./components/picCard";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";

class App extends Component {
  state = {
    score: 0,
    topScore: 0,
    message: "Don't click the same image twice!",
    clicked: [],
    images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg"]
  };

  handleImgClick = id => {
    console.log("You Clicked ID #: " + id);
    const { score, message, clicked, images } = this.state;

    if (message === "You already clicked that one! TRY AGAIN") {
      this.setState({ message: "Don't click the same image twice!" });
    }

    if (clicked.indexOf(id) > -1) {
      this.setState({ message: "You already clicked that one! TRY AGAIN", score: 0, clicked: [] });
    } else {
      this.setState({
        score: score + 1,
        images: images.sort(function() {
          return 0.5 - Math.random();
        })
      });

      clicked.push(id);
    }
  };

  componentDidUpdate() {
    const { score, topScore } = this.state;
    if (topScore < score) {
      this.setState({ topScore: score });
    }
    if (score === 9) {
      this.setState({
        message: "CONGRATULATIONS, YOU WON! Click any image to play again",
        score: 0,
        clicked: []
      });
    }
  }

  render() {
    const { score, topScore, images, message } = this.state;
    return (
      <div>
        <Header score={score} topScore={topScore} />
        <Wrapper>
          <div>
            <h1>{message}</h1>
          </div>

          {images.map(image => (
            <PicCard key={image} pic={image} id={image.charAt(0)} handleImgClick={this.handleImgClick} />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
