import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    ol, ul, li{
        list-style: none;
    }

    .App{
        overflow-x:hidden;
    }

    main{
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    @media (min-width: 979px){
        main{
            flex-direction: row;
            justify-content: center;
        }
    }

`;

export const Button = styled.button`
  background-color: #27ae60;
  width: 106px;
  height: 40px;

  border: none;
  border-radius: 8px;
  padding: 0 20px 0 20px;

  color: white;
  font-weight: 600;
  font-size: 14px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;
