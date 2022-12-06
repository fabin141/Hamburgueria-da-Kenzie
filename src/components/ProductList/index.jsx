import Product from "../Product";
import "./style.css";

function ProductList({ products, filteredProducts, handleClick }) {
  return (
    <div className="productlist">
      {filteredProducts.length === 0
        ? products.map((item) => (
            <Product
              key={item.id}
              id={item.id}
              image={item.img}
              name={item.name}
              category={item.category}
              price={item.price}
              handleClick={handleClick}
            />
          ))
        : filteredProducts.map((item) => (
            <Product
              key={item.id}
              id={item.id}
              image={item.img}
              name={item.name}
              category={item.category}
              price={item.price}
              handleClick={handleClick}
            />
          ))}
    </div>
  );
}

export default ProductList;