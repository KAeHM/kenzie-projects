import "./style.js";
import Header from "./components/Header/index";
import Logo from "./components/Logo/index";
import InputSearch from "./components/inputSearch/index";
import ProductsList from "./components/ProductsList/index";
import Product from "./components/Product/index";
import Cart from "./components/Cart/index";
import CartProduct from "./components/CartProduct/index";
import CartTotal from "./components/CartTotal/index";
import { GlobalStyle } from "./style.js";
import { useEffect, useState } from "react";

function App() {
  const [listProducts, setListProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [search, setSearch] = useState([]);

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response) => response.json())
      .then((response) => {
        setListProducts(response);
        setSearch(response);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Header>
          <Logo></Logo>
          <InputSearch
            listProducts={listProducts}
            setSearch={setSearch}
          ></InputSearch>
        </Header>

        <main>
          <ProductsList>
            {search.length > 0 &&
              search.map((product) => (
                <Product
                  cartTotal={cartTotal}
                  cart={cart}
                  setCart={setCart}
                  setCartTotal={setCartTotal}
                  key={product.id}
                  product={product}
                ></Product>
              ))}
          </ProductsList>

          <div style={{ alignSelf: "center", margin: "20px" }}>
            <Cart cart={cart}>
              {cart.length > 0 &&
                cart.map((product, index) => (
                  <CartProduct
                    cartTotal={cartTotal}
                    cart={cart}
                    setCart={setCart}
                    setCartTotal={setCartTotal}
                    product={product}
                    key={index}
                  ></CartProduct>
                ))}
            </Cart>
            {cart.length > 0 && (
              <CartTotal
                setCartTotal={setCartTotal}
                setCart={setCart}
                cartTotal={cartTotal}
              ></CartTotal>
            )}
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
