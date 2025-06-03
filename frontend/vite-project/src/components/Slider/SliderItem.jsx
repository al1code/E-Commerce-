import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SliderItem = ({ imageSrc }) => {
  return (
    <div className="slider-item fade">
      <div className="slider-image">
        <img src={imageSrc} className="img-fluid" alt="" />
      </div>
      <div className="container">
        <p className="slider-title">İLKBAHAR 2025</p>
        <h2 className="slider-heading">%70'e Varan İndirimler</h2>
        <Link to={"/shop"} className="btn btn-lg btn-primary">
          ŞİMDİ KEŞFET
        </Link>
      </div>
    </div>
  );
};

SliderItem.propTypes = {
  imageSrc: PropTypes.string,
};

export default SliderItem;
