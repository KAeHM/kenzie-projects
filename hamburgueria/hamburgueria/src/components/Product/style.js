import styled from "styled-components";

export const Item = styled.li`
  border: 2px solid #e0e0e0;
  background-color: #fff;
  width: 300px;
  height: 346px;

  div {
    width: 300px;
    height: 196px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;
    padding: 0 10px;

    h3 {
      color: #333333;
      font-weight: 700;
      font-size: 18px;
    }

    span {
      color: #828282;
      font-weight: 400;
      font-size: 12px;
    }

    p {
      color: #27ae60;
      font-weight: 600;
      font-size: 14px;
    }
  }

  .divImg {
    background-color: #f5f5f5;
    width: 100%;
    height: 150px;

    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 162px;
      height: 162px;
    }
  }
`;
