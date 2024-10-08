import { Div } from "./style";
import { Button } from "./../../style";
import toast, { Toaster } from "react-hot-toast";

function InputSearch({ listProducts, setSearch }) {
  function search(valor) {
    if (valor === "") {
      setSearch(listProducts);
    } else {
      let newData = listProducts.filter(
        (elem) =>
          elem.name.toLowerCase().indexOf(valor.toLowerCase().trim()) !== -1
      );
      setSearch(newData);
    }
  }

  const easterEgg = () =>
    toast("A pesquisa está dinamica, me pergunto para que serve o botão...");

  return (
    <Div>
      <input
        onChange={(event) => {
          search(event.target.value);
        }}
        placeholder="Digite o produto aqui"
      ></input>
      <Button onClick={easterEgg}>Pesquisar</Button>
      <Toaster />
    </Div>
  );
}

export default InputSearch;
