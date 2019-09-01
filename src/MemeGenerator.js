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
    return (
      <div>
        <form>
          <input
            type="text"
            value={this.state.topText}
            name="topText"
            placeholder="Top Text"
            onChange={this.handleChange}
          />
          <input
            type="text"
            value={this.state.bottomText}
            name="topText"
            placeholder='bottom" Text'
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default MemeGenerator;
