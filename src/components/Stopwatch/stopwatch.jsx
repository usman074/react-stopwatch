import React, { Component } from "react";
import Timer from "../Timer";
import Spliter from "../Splitter";
import StopwatchButtons from "../StopwatchButtons";
import Logs from "../Logs";
import { timeFormatter } from "./stopwatchUtility";
class Stopwatch extends Component {
  state = {
    time: 0,
    splitTime: 0,
    timeInterval: 10,
    start: false,
    timerId: null,
    logs: [],
    btns: [],
  };

  componentDidMount() {
    const { btns } = this.state;
    const btn = [
      {
        text: "Start",
        toggleText: "Pause",
        styleClassOne: "btnStyle toggle-btn-style",
        styleClassTwo: "btnStyle pink-color",
        eventName: "onStart",
        id: "toggleBtn",
        disable: false,
      },
      {
        text: "Split",
        toggleText: "Split",
        styleClassOne: "transparent-color",
        styleClassTwo: "split-btn-style",
        eventName: "onSplit",
        id: "splitBtn",
        disable: true,
      },
      {
        text: "Reset",
        toggleText: "Reset",
        styleClassOne: null,
        styleClassTwo: null,
        eventName: "onReset",
        id: "resetBtn",
        disable: true,
      },
    ];
    const newBtns = [...btns, ...btn];
    this.setState({ btns: newBtns });
  }

  startTimer = () => {
    const { start, timeInterval, timerId } = this.state;
    const updateStart = !start;
    this.setState({ start: updateStart });
    if (updateStart) {
      const timerId = setInterval(() => {
        const { time } = this.state;
        const updatedTime = time + timeInterval;
        this.setState({ time: updatedTime });
      }, timeInterval);
      this.setState({ timerId });
    } else {
      this.addLog("Pause");
      clearInterval(timerId);
    }
  };

  resetTimer = () => {
    const time = 0;
    this.setState({ time });
  };

  splitTime = () => {
    const { time } = this.state;
    this.addLog("Split");
    this.setState({ splitTime: time });
  };

  addLog = (type) => {
    const { logs, time } = this.state;
    const log = { type, time: timeFormatter(time) };
    const addLog = [...logs, log];
    this.setState({ logs: addLog });
  };

  // splitTimeElem = () => {
  //   const { splitTime } = this.state;
  //   return (

  //   );
  // };

  render() {
    const { time, splitTime } = this.state;
    return (
      <>
        <section>
          <div className="container">
            <Timer time={timeFormatter(time)} />
            {/* {this.splitTimeElem()} */}
            <Spliter
              splitTime={
                splitTime === 0 ? "Split Time" : timeFormatter(splitTime)
              }
            />
            <StopwatchButtons
              watchState={this.state}
              onStart={this.startTimer}
              onReset={this.resetTimer}
              onSplit={this.splitTime}
            />
          </div>
        </section>
        <section className="logContainer">
          <Logs logs={this.state.logs} />
        </section>
      </>
    );
  }
}

export default Stopwatch;
