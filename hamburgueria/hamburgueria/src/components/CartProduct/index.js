import { Item } from "./style";

function CartProduct({ product, cart, cartTotal, setCart, setCartTotal }) {
  let { name, category, price, img } = product;

  function removeCard(product) {
    let newCart = cart.filter((elem) => elem !== product);

    setCart(newCart);
    setCartTotal(cartTotal - price);
  }

  return (
    <Item>
      <div className="divInfo">
        <div className="divImg">
          <img alt="img" src={img}></img>
        </div>

        <div className="divText">
          <p>{name}</p>
          <span>{category}</span>
        </div>
      </div>

      <p onClick={() => removeCard(product)}>Remover</p>
    </Item>
  );
}

export default CartProduct;
