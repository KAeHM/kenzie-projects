import styled from "styled-components";

export const Item = styled.li`
  background: #fff;

  display: flex;
  justify-content: space-between;

  width: 90%;
  height: 80px;

  p {
    font-size: 12px;
    font-weight: 400;
    color: #828282;
    cursor: pointer;
  }

  padding-right: 10px;

  .divInfo {
    display: flex;

    .divImg {
      width: 80px;
      height: 80px;

      background-color: #e0e0e0;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 50px;
        height: 50px;
      }
    }

    .divText {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 5px;

      p {
        font-size: 14px;
        font-weight: 700;
        color: #333333;
      }
      span {
        font-size: 12px;
        font-weight: 400;
        color: #828282;
      }
    }
  }
`;
