import { type Component, createSignal } from "solid-js";
import { FiCheckCircle } from "solid-icons/fi";

const CountDown: Component = () => {
  const [time, setTime] = createSignal<string>("Yükleniyor...");
  const [interVal, setInterVal] = createSignal<NodeJS.Timer | number | null>(
    null
  );
  const countDownDate = new Date(Number(1686986100) * 1000).getTime();

  const updateCountDown = () => {
    const now = new Date().getTime();
    const distance = countDownDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const countDown =
      days.toString().padStart(2, "0") +
      "g " +
      hours.toString().padStart(2, "0") +
      "s " +
      minutes.toString().padStart(2, "0") +
      "dk " +
      seconds.toString().padStart(2, "0") +
      "sn ";
    if (distance > 0) {
      setTime(countDown);
    } else {
      if (!!interVal()) {
        clearInterval(Number(interVal()));
      }
      setTime("Başarılar Dilerim!");
    }
  };

  updateCountDown();
  const interValId = setInterval(updateCountDown, 1000);
  setInterVal(interValId);
  
  return (
    <article class="absolute bottom-0 right-0">
      <div class="bg-primary bg-opacity-75 text-vanilla-300 text-center p-6 rounded-tl-lg border-l border-t border-primary">
        <FiCheckCircle size={44} class="mx-auto" />
        <h2 class="text-4xl font-bold py-2">YKS Geri Sayım</h2>
        <span class="font-light text-lg">{time().toString()}</span>
      </div>
    </article>
  );
};

export default CountDown;
