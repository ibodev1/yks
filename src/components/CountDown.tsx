import { type Component, createSignal } from "solid-js";
import { FiCheckCircle } from "solid-icons/fi";

const CountDown: Component = () => {
  const [time, setTime] = createSignal<string>("Yükleniyor...");
  const countDownDate = new Date(
    "Saturday, June 17, 2023 10:15:00 AM GMT+03:00"
  ).getTime();
  const interVal = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const countDown =
      days.toString().padStart(2, "0") +
      "g " +
      hours.toString().padStart(2, "0") +
      "s " +
      minutes.toString().padStart(2, "0") +
      "dk " +
      seconds.toString().padStart(2, "0") +
      "sn ";
    if (hours > 0) {
      setTime(countDown);
    }
    if (distance < 0) {
      clearInterval(interVal);
      setTime("Başarılar Dilerim!");
    }
  }, 1000);
  return (
    <article class="absolute bottom-0 right-0">
      <div class="bg-primary bg-opacity-75 text-vanilla-300 text-center p-6 rounded-tl-lg border-l border-t border-primary">
        <FiCheckCircle size={44} class="mx-auto" />
        <h2 class="text-4xl font-bold py-2">YKS Geri Sayım</h2>
        <span class="font-light text-lg">{time}</span>
      </div>
    </article>
  );
};

export default CountDown;
