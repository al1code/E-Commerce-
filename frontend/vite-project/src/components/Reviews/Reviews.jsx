import PropTypes from "prop-types";
import ReviewForm from "./ReviewForm";
import ReviewItem from "./ReviewItem";
import "./Reviews.css";

const Reviews = ({ active }) => {
  return (
    <div className={`tab-panel-reviews ${active}`}>
      <h3>2 Yorum</h3>
      <div className="comments">
        <ol className="comment-list">
          <ReviewItem />
          <ReviewItem />
        </ol>
      </div>
      <div className="review-form-wrapper">
        <h2>Yorum Yap</h2>
        <ReviewForm />
      </div>
    </div>
  );
};

Reviews.propTypes = {
  active: PropTypes.string,
};

export default Reviews;
