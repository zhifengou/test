import React, { Component } from "react";
import "./App.css";
import ImageContainer from "./ImageContainer";
import Form from "./Form";

class App extends Component {
  state = {
    images: []
  };
  clickHandler = imgObj => {
      let copyArr = [...this.state.images].filter(copyimgObj => {
        return copyimgObj !== imgObj;
      });
      console.log(copyArr);
      this.setState({
        images: copyArr
      });
    };

  submitHandler = obj => {
    let copyArr = [...this.state.images, obj];
    this.setState({
      images: copyArr
    });
  };

  render() {
    return (
      <div>
        <Form submitHandler={this.submitHandler} />
        <ImageContainer
          images={this.state.images}
          clickHandler={this.clickHandler}
        />
      </div>
    );
  }
}

export default App;
