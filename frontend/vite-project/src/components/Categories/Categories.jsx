import CategoryItem from "./CategoryItem";
import "./Categories.css";

const Categories = () => {
  return (
    <section className="categories">
      <div className="container">
        <div className="section-title">
          <h2>Tüm Kategoriler</h2>
        </div>
        <ul className="category-list">
          {/*Şimdilik kalsın. İleride veritabanından alınacak.*/}
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
        </ul>
      </div>
    </section>
  );
};

export default Categories;
