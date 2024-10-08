import { HeaderDiv } from "./style";

function Header({ children }) {
  return (
    <HeaderDiv>
      {children[0]}
      {children[1]}
    </HeaderDiv>
  );
}

export default Header;
