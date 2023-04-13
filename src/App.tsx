import { type Component, Show, createEffect } from "solid-js";
import { inject } from "@vercel/analytics";
import CountDown from "./components/CountDown";
import DateClock from "./components/DateClock";
import Quote from "./components/Quote";
import Working from "./components/Working";
import Fullscreen from "./components/Buttons/Fullscreen";
import Settings from "./components/Settings";
import createLocalStore from "./helpers/createLocaleStore";
import { ISettings } from "./types";
import Works from "./components/Works";
import { Toaster } from "solid-toast";

type Mode = "auto" | "development" | "production";

inject({
  debug: import.meta.env.DEV,
  mode: (import.meta.env.MODE as Mode) ?? "auto"
});

const App: Component = () => {
  const [settings, setSettings] = createLocalStore<ISettings>("settings", {
    showQuote: true,
    showCountDown: true,
    showDatetime: true,
    bgImage: "../assets/bg.jpeg"
  });

  createEffect(() => {
    fetch(settings.bgImage).catch(() => {
      setSettings({
        ...settings,
        bgImage: "../assets/bg.jpeg"
      });
    });
    document.body.style.backgroundImage = `url(${settings.bgImage})`;
  });
  return (
    <>
      <Show when={settings.showCountDown}>
        <CountDown />
      </Show>
      <Show when={settings.showDatetime}>
        <DateClock />
      </Show>
      <Show when={settings.showQuote}>
        <Quote />
      </Show>
      <Working />
      <Fullscreen />
      <Settings settings={settings} setSettings={setSettings} />
      <Works />
      <Toaster position="top-center" gutter={8} />
    </>
  );
};

export default App;
