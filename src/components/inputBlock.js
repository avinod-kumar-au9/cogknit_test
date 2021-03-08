import React, { useState } from "react";

const InputBlock = (props) => {
  const { GenerateHandler, ClearHandler, buttonVal } = props;
  const [rowVal, setrowVal] = useState(0);
  const [colVal, setcolVal] = useState(0);

  const rowInputHandler = (e) => {
    setrowVal(e.target.value);
  };
  const columnInputHandler = (e) => {
    setcolVal(e.target.value);
  };

  return (
    <div>
      <h3>Block Config</h3>
      <h4 style={{ display: "inline", marginRight: "45px" }}>Row :</h4>
      <input
        style={{ width: "40px" }}
        onChange={rowInputHandler}
        type="number"
      />
      <br />
      <br />
      <h4 style={{ display: "inline", marginRight: "20px" }}>Column :</h4>
      <input
        style={{ width: "40px" }}
        onChange={columnInputHandler}
        type="number"
      />
      <br />
      <br />
      <button
        style={{ marginRight: "20px" }}
        onClick={() => GenerateHandler(rowVal, colVal)}
      >
        Generate
      </button>
      <button onClick={() => ClearHandler(0, 0)}>Clear</button>
      <br />
      <br />
      <hr />
      Selected Block:
      <br />
      <br />
      {buttonVal ? (
        <button style={{ marginRight: "20px", width: "40px", height: "40px" }}>
          {buttonVal}
        </button>
      ) : (
        "Nothing to show"
      )}
    </div>
  );
};

export default InputBlock;
