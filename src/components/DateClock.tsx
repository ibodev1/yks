import { type Component, createSignal } from "solid-js";
import { FiClock } from "solid-icons/fi";

const DateClock: Component = () => {
  const [hours, setHours] = createSignal<string>("Yükleniyor...");
  const [date, setDate] = createSignal<string>("Yükleniyor...");

  const updateTime = () => {
    const date = new Date();
    const hours =
      date.getHours().toString().padStart(2, "0") +
      ":" +
      date.getMinutes().toString().padStart(2, "0");
    const dateString = date.toLocaleDateString("tr-TR", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    });
    setDate(dateString);
    setHours(hours);
  };

  updateTime();
  setInterval(updateTime, 1000);
  return (
    <article class="absolute bottom-0 left-0 hidden sm:block">
      <div class="bg-primary bg-opacity-75 text-vanilla-300 text-center p-6 rounded-tr-lg border-r border-t border-primary">
        <FiClock size={44} class="mx-auto" />
        <h2 class="text-4xl font-bold py-2">{hours().toString()}</h2>
        <span class="font-light text-lg">{date().toString()}</span>
      </div>
    </article>
  );
};

export default DateClock;
