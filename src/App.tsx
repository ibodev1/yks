import type { Component } from "solid-js";
import CountDown from "./components/CountDown";
import DateClock from "./components/DateClock";

const App: Component = () => {
  return (
    <>
      <CountDown />
      <DateClock />
    </>
  );
};

export default App;
