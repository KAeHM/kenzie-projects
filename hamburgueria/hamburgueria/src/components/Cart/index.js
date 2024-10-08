import { DivCart } from "./style";

function Cart({ children, cart }) {
  return (
    <DivCart>
      <div className="title">
        <h3>Carrinho de compras</h3>
      </div>

      <ul
        className="products"
        style={
          cart.length === 0
            ? { justifyContent: "center" }
            : { justifyContent: "flex-start" }
        }
      >
        {cart.length > 0 ? (
          children
        ) : (
          <>
            <p className="emptyP">Sua Sacola está vazia</p>{" "}
            <span className="emptySpan">Adicione Itens</span>{" "}
          </>
        )}
      </ul>
    </DivCart>
  );
}

export default Cart;
