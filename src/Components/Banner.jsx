import { useState } from "react";
import styled from "styled-components";
import "./banner.scss"

const Div = styled.div`
  background-color: ${({selected})=> (selected ? "red" : "black")};
  color: white;
  font-size: 30px;
  &:hover {
    background-color: red;
    color: black;
  }
  @media (max-width: 1200px) {
    background-color: aqua;
  }
`;

const Banner = () => {
  const [selected, setSelected] = useState(false);
  return (
    <>
      <Div selected={selected} >
        <p>Salam</p>
      </Div>
      <div className="scss">
      <button type="button" onClick={() => setSelected(!selected)}>
        Toggle
      </button>
      </div>
    </>
  );
};
export default Banner;
