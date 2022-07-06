import styled from "styled-components";

export const CartWrapper = styled.div`
  border-style: dotted;
  background: rgba(0, 0, 0, 0.4);
  right: 0;
  left: 0;
  width: 100%;
  position: fixed;
  height: 100vh;
  z-index: 100;
  top: 0;
  display: flex;
  justify-content: flex-end;
  /* display: none; */
`;

export const CartStyle = styled.div`
  width: 40%;
  background: #f1f1f1;
  padding: 2rem 5rem;
  overflow -y: scroll;
  position: relative;
`;
