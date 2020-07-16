import React, { Component } from "react";
import { getButtonConfig, isDisable } from "./stopwatchButtonsUtility";
const StopwatchButtons = (props) => {
  // const btn = [
  //   {
  //     text: "Start",
  //     toggleText: "Pause",
  //     styleClassOne: "btnStyle toggle-btn-style",
  //     styleClassTwo: "btnStyle pink-color",
  //     eventName: "onStart",
  //     id: "toggleBtn",
  //     disable: false,
  //   },
  //   {
  //     text: "Split",
  //     toggleText: "Split",
  //     styleClassOne: "transparent-color",
  //     styleClassTwo: "split-btn-style",
  //     eventName: "onSplit",
  //     id: "splitBtn",
  //     disable: true,
  //   },
  //   {
  //     text: "Reset",
  //     toggleText: "Reset",
  //     styleClassOne: null,
  //     styleClassTwo: null,
  //     eventName: "onReset",
  //     id: "resetBtn",
  //     disable: true,
  //   },
  // ];
  const { start, btns } = props.watchState;
  return (
    <div className="btn">
      {btns.map(({ text, disable, eventName, id }, index) => (
        <button
          key={index}
          onClick={props[eventName]}
          id={id}
          className={getButtonConfig(start, btns[index]).style}
          disabled={isDisable(start, text) && disable}
        >
          {getButtonConfig(start, btns[index]).text}
        </button>
      ))}
      {/* <button
        onClick={props.onStart}
        id="toggleBtn"
        className={getStartColor(props.watchState.start).color}
      >
        {getStartColor(props.watchState.start).text}
      </button>

      <button
        onClick={props.onSplit}
        className={getSplitColor(props.watchState.start)}
        id="splitBtn"
        disabled={props.watchState.start ? false : true}
      >
        Split
      </button>
      <button
        onClick={props.onReset}
        id="resetBtn"
        disabled={props.watchState.start ? true : false}
      >
        Reset
      </button> */}
      {/* <hr /> */}
    </div>
  );
};

// function getStartColor(start) {
//   if (start) {
//     return { color: "btnStyle pink-color", text: "Pause" };
//   } else {
//     return { color: "btnStyle toggle-btn-style", text: "Start" };
//   }
// }

// function getSplitColor(start) {
//   if (start) {
//     return "split-btn-style";
//   } else {
//     return "transparent-color";
//   }
// }

export default StopwatchButtons;
