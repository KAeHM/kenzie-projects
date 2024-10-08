import styled from "styled-components";

export const List = styled.ul`
  overflow: auto;

  padding: 10px;

  width: 100%;
  heigth: 346px;
  max-width: 943px;

  display: flex;

  gap: 10px;

  @media (min-width: 979px) {
    overflow: hidden;

    flex-wrap: wrap;
  }
`;
