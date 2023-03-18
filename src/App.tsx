import type { Component } from "solid-js";
import { inject } from "@vercel/analytics";
import CountDown from "./components/CountDown";
import DateClock from "./components/DateClock";
import Quote from "./components/Quote";
import Working from "./components/Working";
import Fullscreen from "./components/Buttons/Fullscreen";

inject();

const App: Component = () => {
  return (
    <>
      <CountDown />
      <DateClock />
      <Quote />
      <Working />
      <Fullscreen />
    </>
  );
};

export default App;
