import ReviewForm from "./ReviewForm";
import ReviewItem from "./ReviewItem";
import "./Reviews.css";

const Reviews = () => {
  return (
    <div className="tab-panel-reviews">
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

export default Reviews;
