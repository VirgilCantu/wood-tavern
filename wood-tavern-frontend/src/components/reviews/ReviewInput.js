import React, { Component } from "react";

class ReviewInput extends Component {
  render() {
    return (
      <div>
        <h2>Add Review</h2>
        <form>
          <label htmlFor="name">Name: </label>
          <input type="text" />
        </form>
      </div>
    );
  }
}

export default ReviewInput;
