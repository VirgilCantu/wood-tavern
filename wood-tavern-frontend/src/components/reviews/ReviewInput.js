import React, { Component } from "react";

class ReviewInput extends Component {
  state = {
    title: "",
    name: "",
    content: "",
    date: Date.now(),
    rating: 5
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    debugger;
    event.preventDefault();
    this.props.addReview(this.state);
    this.setState({
      title: "",
      name: "",
      content: "",
      date: "",
      rating: 5
    });
  };

  render() {
    return (
      <div>
        <h2>Add Review</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            name="title"
            id="title"
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={this.handleChange}
          />
          <br />
          <textarea
            id="content"
            name="content"
            rows="5"
            cols="33"
            defaultValue="Leave your thoughts here..."
            onChange={this.handleChange}
          ></textarea>
          <br />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default ReviewInput;
