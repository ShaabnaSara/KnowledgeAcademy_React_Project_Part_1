import { useEffect, useState } from "react";
import axios from "axios";
import "./Categories.css";
import { Container } from "react-bootstrap";

const Categories = () => {
  const [categories, setcategories] = useState([]);

  const getCategories = async () => {
    const { data } = await axios.get(
      `https://ecommerce-node4.vercel.app/categories/active?page=1&limit=10`
    );
    setcategories(data.categories);
    console.log(data.categories);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <>
      <Container>
        <h2>Shopping By Categories</h2>
        <div className="Categories">
          {categories.map((categorie) => (
            <div key={categorie._id}>
              <img src={categorie.image.secure_url} alt={categorie.name} />
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default Categories;
