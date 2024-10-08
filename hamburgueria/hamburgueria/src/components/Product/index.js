import { Item } from "./style.js";
import { Button } from "./../../style.js";

function Products({ product, setCart, setCartTotal, cart, cartTotal }) {
  let { name, category, price, img } = product;

  function addCart() {
    const obj = {
      name,
      category,
      price,
      img,
    };

    let should = cart.every((elem) => elem.name !== obj.name);

    if (should) {
      setCartTotal(cartTotal + price);
      setCart([...cart, obj]);
    }
  }

  return (
    <Item>
      <div className="divImg">
        <img alt="produto" src={img}></img>
      </div>

      <div>
        <h3>{name}</h3>
        <span>{category}</span>
        <p>R$ {price}</p>

        <Button onClick={() => addCart()}>Adicionar</Button>
      </div>
    </Item>
  );
}

export default Products;
