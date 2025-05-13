import "./Breadcrumb.css";

const Breadcrumb = () => {
  return (
    <div className="single-topbar">
      <nav className="breadcrumb">
        <ul>
          <li>
            <a href="#">Anasayfa</a>
          </li>
          <li>
            <a href="#">Erkek</a>
          </li>
          <li>
            <a href="#">Pantolonlar</a>
          </li>
          <li>Mavi Kot Pantolon</li>
        </ul>
      </nav>
    </div>
  );
};

export default Breadcrumb;
