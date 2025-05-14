import "./Search.css";

const Search = ({ isSearchShow, setIsSearchShow }) => {
  return (
    <div className={`modal-search ${isSearchShow ? "show" : ""}`}>
      <div className="modal-wrapper">
        <h3 className="modal-title">Ürün Arama</h3>
        <form className="search-form">
          <input type="text" placeholder="Aramak istediğiniz ürünü yazınız." />
          <button>
            <i className="bi bi-search"></i>
          </button>
        </form>
        <div className="search-results">
          <div className="search-heading">
            <h3>Arama Sonuçları</h3>
          </div>
          <div className="results">
            <a href="#" className="result-item">
              <img
                src="img/products/product1/1.png"
                className="search-thumb"
                alt=""
              />
              <div className="search-info">
                <h4>Çizgili Ceket ve Pantolon</h4>
                <span className="search-price">999₺</span>
              </div>
            </a>
            <a href="#" className="result-item">
              <img
                src="img/products/product2/1.png"
                className="search-thumb"
                alt=""
              />
              <div className="search-info">
                <h4>Mavi Kot Pantolon</h4>
                <span className="search-price">799₺</span>
              </div>
            </a>
          </div>
        </div>
        <i
          className="bi bi-x-circle"
          id="close-search"
          onClick={() => setIsSearchShow(false)}
        ></i>
      </div>
      <div
        className="modal-overlay"
        onClick={() => setIsSearchShow(false)}
      ></div>
    </div>
  );
};

export default Search;
