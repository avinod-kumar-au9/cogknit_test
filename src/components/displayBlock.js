import React, { useState } from "react";
import "./styles/displayblock.css";
const DisplayBlock = (props) => {
  const { rowVal1, colVal1, buttonClickHandler } = props;
  let rowVal = parseInt(rowVal1);
  let colVal = parseInt(colVal1);

  var total = rowVal * colVal;

  const renderDisplay = () => {
    let array = [];
    let cnt = 0;
    let arr = [];
    for (var i = 1; i < total + 1; i++) {
      cnt += 1;
      arr.push(i);
      if (cnt === colVal) {
        cnt = 0;
        let arr1 = [...arr];
        array.push(arr1);
        arr.length = 0;
      } else {
        if (i === total) {
          let arr1 = [...arr];
          array.push(arr1);
        }
      }
    }
    console.log("1");
    console.log(array);
    if (array) {
      return array.map((row, id) => {
        return (
          <div key={{ id }} style={{ marginBottom: "10px" }}>
            {row.map((col, idx) => {
              return (
                <button
                  onClick={() => buttonClickHandler(col)}
                  key={idx}
                  style={{ marginRight: "20px", width: "40px", height: "40px" }}
                >
                  {col}
                </button>
              );
            })}
          </div>
        );
      });
    }
  };

  return (
    <div className="displayblock">
      <h4>Block Display</h4>
      <br />
      <br />
      {renderDisplay()}

      <span>Total Blocks : {total}</span>
    </div>
  );
};

export default DisplayBlock;
