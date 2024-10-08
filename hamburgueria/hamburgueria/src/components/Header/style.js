import styled from "styled-components";

export const HeaderDiv = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #f5f5f5;
  width: 100%;
  height: 139px;

  @media (min-width: 769px) {
    height: 80px;
    flex-direction: row;
    justify-content: space-around;
  }
`;
