import { Div } from "./style";

function CartTotal({ setCart, cartTotal, setCartTotal }) {
  return (
    <Div>
      <div>
        <p>Total</p>
        <span>R$ {cartTotal.toFixed(2)}</span>
      </div>

      <button
        onClick={() => {
          setCart([]);
          setCartTotal(0);
        }}
      >
        Remover Todos
      </button>
    </Div>
  );
}

export default CartTotal;
