import { ProductCard } from "../index";

// dummy data
import { constants } from "../../data/constants";

export default function Catalog() {
  return (
    <section id="catalog">
      <div className="explanation">
        <h1>
          Product <span>Catalog</span>
        </h1>
        <p>
          Explore our wide range of bakery products, including artisanal bread,
          mouth-watering cakes, savory pastries, and delightful cookies. Each
          item is made with care to ensure the highest quality and taste. Browse
          through our catalog to find the perfect treat for you!
        </p>
      </div>

      <div className="product-list">
        {constants.catalog.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            img={product.image}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
    </section>
  );
}
