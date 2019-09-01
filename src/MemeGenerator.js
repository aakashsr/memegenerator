import React, { Component } from "react";

class MemeGenerator extends Component {
  constructor() {
    super();
    this.state = {
      topText: "abe",
      bottomText: "chutiya hai kya?",
      randomImage: "http://i.imgflip.com/1bij.jpg",
      allMemeImgs: []
    };
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(response => {
        this.setState({
          allMemeImgs: response.data.memes
        });
      });
  }

  render() {
    return <h1>MEME GENERATOR</h1>;
  }
}

export default MemeGenerator;
