const SliderItem = () => {
  return (
    <div className="slider-item fade">
      <div className="slider-image">
        <img src="img/slider/slider1.jpg" className="img-fluid" alt="" />
      </div>
      <div className="container">
        <p className="slider-title">İLKBAHAR 2025</p>
        <h2 className="slider-heading">%70'e Varan İndirimler</h2>
        <a href="#" className="btn btn-lg btn-primary">
          ŞİMDİ KEŞFET
        </a>
      </div>
    </div>
  );
};

export default SliderItem;
