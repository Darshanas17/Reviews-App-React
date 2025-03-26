import { Component } from "react";
import "./index.css";

class ReviewsCarousel extends Component {
  state = { activeId: 0 };

  leftArrow = () => {
    this.setState((prevState) => ({
      activeId:
        prevState.activeId > 0 ? prevState.activeId - 1 : prevState.activeId,
    }));
  };

  rightArrow = () => {
    const { reviewsList } = this.props;
    this.setState((prevState) => ({
      activeId:
        prevState.activeId < reviewsList.length - 1
          ? prevState.activeId + 1
          : prevState.activeId,
    }));
  };

  render() {
    const { activeId } = this.state;
    const { reviewsList } = this.props;
    const { imgUrl, username, companyName, description } =
      reviewsList[activeId];

    return (
      <div className="bg-cont">
        <div className="cont">
          <div className="review-wrapper">
            <button
              className="arrow-button"
              type="button"
              onClick={this.leftArrow}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
                className="arrow-img"
              />
            </button>
            <div className="review-cont">
              <h1 className="head">Reviews</h1>
              <img src={imgUrl} alt={username} className="profile-img" />
              <p className="username">{username}</p>
              <p className="company-name">{companyName}</p>
              <p className="desc">{description}</p>
            </div>
            <button
              className="arrow-button"
              type="button"
              onClick={this.rightArrow}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
                className="arrow-img"
              />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ReviewsCarousel;
