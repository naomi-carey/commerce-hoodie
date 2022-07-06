import styled from "styled-components";

export const NavStyles = styled.nav`
  min-height: 15vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  border-style: solid;
  border-color: orange;

  a {
    font-size: 1.2rem;
  }
`;

export const NavItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-style: solid;
  border-color: blue;

  div {
    margin-left: 3rem;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-style: solid;
    border-color: purple;
  }

  h3 {
    font-size: 0.75rem;
    padding: 0.25rem;
    border-style: solid;
    border-color: green;
  }

  svg {
    font-size: 1.5rem;
  }
`;
