import styled from "styled-components";

const Navstyle = styled.div`
  display: flex;

  background-color: white;
  text-align: center;
`;

const MyStyled = styled.div`
  width: 500px;
  height: 100px;
  border: 1px solid red;
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: self-end;
`;

const BtnStyle = styled.button`
  width: 100px;
  height: 50px;
  border: 1px solid red;
  margin: 20px;
  background-color: red;
  color: white;
  font-size: large;
  &:hover {
    background-color: blue;
    border: blue;
  }
`;

const Fanletterstyle = styled.div`
  background-color: black;
  color: white;
  border: 1px solid white;
  width: 500px;
`;
export { MyStyled, BtnStyle, Fanletterstyle, Navstyle };
