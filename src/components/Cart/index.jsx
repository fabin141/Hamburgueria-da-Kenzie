import "./style.css";

const Cart = ({ currentSale, setCurrentSale, removeProduct }) => {
  const total = currentSale.reduce((acc, atual) => {
    return acc + atual.price;
  }, 0);
  return (
    <div className="cart">
      <div className="cartTitle">
        <p className="cartTitleP">Carrinho de Compras</p>
      </div>
      <div>
        {currentSale.map((product) => (
          <div className="cartProduct">
            <img
              className="cartProductImg"
              src={product.img}
              alt={product.name}
            ></img>
            <div className="carProductText">
              <p className="cartProductName">{product.name}</p>
              <p className="cartProductCategory">{product.category}</p>
            </div>
            <button
              className="cartProductButton"
              id={product.id}
              onClick={(event) => removeProduct(event.target.id)}
            >
              Remover
            </button>
          </div>
        ))}
      </div>
      <div>
        {currentSale.length > 0 ? (
          <>
            <div className="cartTotal">
              <div className="cartTotalText">
                <p className="cartTotalTextTotal">Total</p>
                <span className="cartTotalTextPrice">
                  R$ {total.toFixed(2)}
                </span>
              </div>
              <div>
                <button
                  className="cartTotalButton"
                  onClick={() => setCurrentSale([])}
                >
                  Remover todos
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="cartEmpty">
            <p className="cartEmptyTitle">Sua sacola está vazia</p>
            <p className="cartEmptyText">Adicione itens</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;