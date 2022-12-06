import "./App.css";
import { useEffect, useState } from "react";

import ProductList from "./components/ProductList";
import Header from "./components/Header";
import Cart from "./components/Cart";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response) => response)
      .then((response) => response.json())
      .then((response) => setProducts(response));
  }, []);

  function showProducts(elem) {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(elem.toLowerCase())
    );
    setFilteredProducts(filtered);
  }

  const handleClick = (elem) => {
    if (currentSale.find((product) => product.id === elem)) {
    } else {
      setCurrentSale([
        ...currentSale,
        products.find((product) => product.id === elem),
      ]);
    }
  };

  const removeProduct = (productId) => {
    const remove = currentSale.findIndex(
      (item) => item.id === Number(productId)
    );
    currentSale.splice(remove, 1);
    setCurrentSale([...currentSale]);
  };

  return (
    <div className="App">
      <Header showProducts={showProducts} />
      <div className="containerApp">
        <div className="containerAppProductList">
          <ProductList
            products={products}
            filteredProducts={filteredProducts}
            handleClick={handleClick}
          />
        </div>

        <div>
          <Cart
            currentSale={currentSale}
            setCurrentSale={setCurrentSale}
            removeProduct={removeProduct}
          />
        </div>
      </div>
    </div>
  );
}

export default App;