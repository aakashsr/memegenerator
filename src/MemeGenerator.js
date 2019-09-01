import React, { Component } from "react";

class MemeGenerator extends Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImg: "",
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

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleMeme = event => {
    event.preventDefault();
    const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length);
    this.setState({
      randomImg: this.state.allMemeImgs[randNum].url
    });
  };

  render() {
    console.log(this.state.allMemeImgs);
    return (
      <div>
        <form className="meme-form" onSubmit={this.handleMeme}>
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
            name="bottomText"
            placeholder='bottom" Text'
            onChange={this.handleChange}
          />
          <button>Gen</button>
        </form>
        <div className="meme">
          <img src={this.state.randomImg} alt="" />
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
      </div>
    );
  }
}

export default MemeGenerator;
