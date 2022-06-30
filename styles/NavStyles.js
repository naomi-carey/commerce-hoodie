import styled from "styled-components";

export const NavStyles = styled.div`
  min-height: 15vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;

  a {
    font-size: 1.2rem;
  }
`;

export const NavItems = styled.div`
  display: display;
  align-items: center;
  justify-content: space-around;
  div {
    margin-left: 3rem;
    position: relative: ;
    align-items: center;
    display: flex;
    flex-direction: column;
  }

  h3 {
    font-size: 1rem;
    padding: 0.25rem;
  }

  svg{
    font-size: 1.5rem;
  }

 
`;
