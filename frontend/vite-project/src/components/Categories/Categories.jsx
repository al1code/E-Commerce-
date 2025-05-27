import CategoryItem from "./CategoryItem";
import { message } from "antd";
import { useEffect, useState } from "react";
import "./Categories.css";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/categories`);

        if (response.ok) {
          const data = await response.json();
          setCategories(data);
        } else {
          message.error("Veri getirme başarısız.");
        }
      } catch (error) {
        console.log("Veri hatası:", error);
      }
    };
    fetchCategories();
  }, []);

  return (
    <section className="categories">
      <div className="container">
        <div className="section-title">
          <h2>Tüm Kategoriler</h2>
        </div>
        <ul className="category-list">
          {/*Şimdilik kalsın. İleride veritabanından alınacak.*/}

          {categories.map((category) => (
            <CategoryItem key={category._id} category={category} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Categories;
