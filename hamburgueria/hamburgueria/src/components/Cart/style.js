import styled from "styled-components";

export const DivCart = styled.div`
  width: 310px;

  display: flex;
  flex-direction: column;
  align-self: center;

  .title {
    background: #27ae60;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;

    color: #fff;
    font-weight: 700;
    font-size: 18px;

    display: flex;
    align-items: center;

    width: 100%;
    height: 65px;
    padding: 18px 10px;
  }

  .products {
    background-color: #f5f5f5;

    overflow: auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    padding: 10px 0;
    height: 190px;

    .emptyP {
      font-size: 18px;
      font-weight: 700;
      color: #333333;
    }
    .emptySpan {
      font-size: 14px;
      font-weight: 400;
      color: #828282;
    }

    @media (min-width: 979px) {
      height: 280px;
    }
  }
`;
