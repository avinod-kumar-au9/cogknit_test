import { useState } from "react";
import DisplayBlock from "./displayBlock";

import InputBlock from "./inputBlock";
import "./styles/home.css";
const Home = () => {
  const [rowVal, setrowVal] = useState(0);
  const [colVal, setcolVal] = useState(0);
  const [buttonVal, setbuttonVal] = useState("");

  const GenerateHandler = (row, col) => {
    setrowVal(row);
    setcolVal(col);
  };
  const ClearHandler = (row, col) => {
    setrowVal(row);
    setcolVal(col);
  };

  const buttonClickHandler = (val) => {
    setbuttonVal(val);
  };

  return (
    <div className="homeRow">
      <div className="homeCol">
        <DisplayBlock
          rowVal1={rowVal}
          colVal1={colVal}
          buttonClickHandler={buttonClickHandler}
        />
      </div>
      <div className="homeCol">
        <InputBlock
          GenerateHandler={GenerateHandler}
          ClearHandler={ClearHandler}
          buttonVal={buttonVal}
        />
      </div>
    </div>
  );
};

export default Home;
