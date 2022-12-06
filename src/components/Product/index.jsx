import "./style.css";

function Product({ id, name, image, category, price, handleClick }) {
  return (
    <div>
      <div className="containerProduct">
        <div className="productImageDiv" key={id}>
          <img className="productImage" src={image} alt="foto do produto" />
        </div>
        <div className="containerProductDescription">
          <p className="productName">{name}</p>
          <p className="productCategory">{category}</p>
          <span className="productPrice">R${price.toFixed(2)}</span>
          <div>
            <button className="productButton" onClick={() => handleClick(id)}>
              Adicionar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;