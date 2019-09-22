import React, { Component } from "react";
import "./App.css";
import PicCard from "./components/picCard";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";

class App extends Component {
  state = {
    score: 0,
    topScore: 0,
    clicked: []
  };

  render() {
    const { score, topScore, clicked } = this.state;
    return (
      <div>
        <Header score={score} topScore={topScore} />
        <Wrapper>
          <PicCard />
        </Wrapper>
      </div>
    );
  }
}

export default App;
