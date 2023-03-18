import { type Component, createSignal } from "solid-js";

const DateClock: Component = () => {
  const [hours, setHours] = createSignal<string>("Yükleniyor...");
  const [date, setDate] = createSignal<string>("Yükleniyor...");
  setInterval(function () {
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
  }, 1000);
  return (
    <article class="absolute bottom-0 left-0">
      <div class="bg-primary bg-opacity-75 text-vanilla-300 text-center p-6 rounded-tr-lg border-r border-t border-primary">
        <h2 class="text-4xl font-bold pb-2">{hours}</h2>
        <span class="font-light text-lg">{date}</span>
      </div>
    </article>
  );
};

export default DateClock;
