import React, { Component, Fragment } from "react";
import styled from "styled-components";

class App extends Component {
  render() {
    return (
      <Container>
        <Button danger>Hello</Button>
        <Button>Hello</Button>
      </Container>
    );
  }
}

//styled-components를 사용해서 <div>태그를 생성, 백틱(₩) 안에 css 스타일 코드를 넣어준다.
const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: lightgrey;
`;

//styled-components를 사용해 <button>태그를 생성, 백틱 안에 css 스타일 코드를 넣어준다.
//여기서 Button은 Component이기 때문에 props를 받는다. 그걸 ${}안에 js코드를 사용해서 활용할 수 있다.
const Button = styled.button`
  border-radius: 50px;
  padding: 5px;
  min-width: 120px;
  color: white;
  font-weight: 600;
  -webkit-appearance: none;
  cursor: pointer;
  &:active,
  &:focus {
    outline: none;
  }
  background-color: ${(props) => (props.danger ? "#e74c3c" : "#2ecc71")};
`;

//ES6 화살표 문법을 사용한 함수형 컴포넌트
// const Button = ({ danger }) => (
//   <button className={danger ? "button--danger" : "button--success"}>
//     Hello
//   </button>
// );

//함수형 컴포넌트
// function Button({ danger }) {
//   return (
//     <button className={danger ? "button--danger" : "button--success"}>
//       Hello
//     </button>
//   );
// }
export default App;
