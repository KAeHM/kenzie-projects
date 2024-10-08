import styled from "styled-components";

export const Div = styled.div`
  width: 310px;

  margin-bottom: 10px;
  padding: 8px 5px;

  display: flex;
  flex-direction: column;
  align-self: center;
  background-color: #f5f5f5;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;

  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;

    p {
      color: #333333;
      font-weight: 600;
      font-size: 14px;
    }

    span {
      color: #828282;
      font-weight: 600;
      font-size: 14px;
    }
  }
  button {
    height: 60px;

    padding: 0 20px 0 20px;
    background-color: #e0e0e0;

    border: none;
    border-radius: 8px;

    color: #828282;
    font-weight: 600;
    font-size: 15px;
    cursor: pointer;
  }
`;
