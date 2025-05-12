import "./BlogItem.css";

const BlogItem = () => {
  return (
    <li className="blog-item">
      <a href="#" className="blog-image">
        <img src="img/blogs/blog1.jpg" alt="" />
      </a>
      <div className="blog-info">
        <div className="blog-info-top">
          <span>12 Mayıs 2025</span> - <span>0 Yorum</span>
        </div>
        <div className="blog-info-center">
          <a href="#">
            Tarzını yansıtan doğru kıyafeti seçmek bazen zorlayıcı olabilir.
            Vücut tipine, mevsime ve modaya uygun kombin önerileriyle
            gardırobunu yeniden keşfetmeye ne dersin? Blog yazımızda seni
            bekliyor!
          </a>
        </div>
        <div className="blog-info-bottom">
          <a href="#">Daha Fazla Oku</a>
        </div>
      </div>
    </li>
  );
};

export default BlogItem;
