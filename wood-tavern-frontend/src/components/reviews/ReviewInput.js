import React, { Component } from "react";

class ReviewInput extends Component {
  state = {
    title: "",
    name: "",
    content: "",
    date: "",
    rating: 5
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div>
        <h2>Add Review</h2>
        <form>
          <label htmlFor="title">Title: </label>
          <input type="text" name="title" id="title" />
          <br />
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" id="name" />
          <br />
          <textarea
            id="content"
            name="content"
            rows="5"
            cols="33"
            defaultValue="Leave your thoughts here..."
          ></textarea>
          <br />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default ReviewInput;
