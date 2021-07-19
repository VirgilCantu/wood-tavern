import React, { Component } from "react";
import StarRatings from "react-star-ratings";

class ReviewInput extends Component {
  state = {
    name: "",
    content: "Leave your thoughts here",
    date: "",
    rating: 0
  };

  componentDidMount() {
    this.getDate();
  }

  getDate = () => {
    const date = new Date().toDateString();
    this.setState({ date });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addReview(this.state);

    this.setState({
      name: "",
      content: "",
      rating: 0
    });
  };

  changeRating = newRating => {
    this.setState({
      rating: newRating
    });
  };

  render() {
    return (
      <div className="text-center">
        <h2>Add Review</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name: &nbsp; </label>
          <input
            type="text"
            name="name"
            id="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <StarRatings
            rating={this.state.rating}
            changeRating={this.changeRating}
            isSelectable="true"
            starDimension="20px"
            starSpacing="5px"
            starRatedColor="rgb(255,202,40)"
            starHoverColor="rgb(255,202,40)"
          />
          <br />
          <br />
          <textarea
            id="content"
            name="content"
            rows="5"
            cols="33"
            onChange={this.handleChange}
            value={this.state.content}
          ></textarea>
          <br />
          <br />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default ReviewInput;
