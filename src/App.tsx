import type { Component } from "solid-js";
import CountDown from "./components/CountDown";
import DateClock from "./components/DateClock";
import Quote from "./components/Quote";

const App: Component = () => {
  return (
    <>
      <CountDown />
      <DateClock />
      <Quote />
    </>
  );
};

export default App;
