import { type Component, createSignal } from "solid-js";
import { FiPlayCircle, FiPauseCircle, FiCheckCircle } from "solid-icons/fi";
import { nanoid } from 'nanoid'
import { Work, Timer } from "../types";
import { addNewWork } from "../helpers/works";

const Working: Component = () => {
  const [isStarted, setIsStarted] = createSignal<Boolean>(false);
  const [isStopover, setIsStopover] = createSignal<Boolean>(false);
  const [isFinished, setIsFinished] = createSignal<Boolean>(false);
  const [details, setDetails] = createSignal<Work>({
    id: nanoid(),
    startTime: "00:00",
    finishedTime: "00:00",
    totalTime: {
      hours: 0,
      minutes: 0,
      seconds: 0
    },
    stopOverCount: 0,
    createdDate: Date.now()
  });
  const [interVal, setInterVal] = createSignal<NodeJS.Timer | null>(null);
  const [timer, setTimer] = createSignal<Timer>({
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const handleStart = () => {
    if (interVal() !== null) {
      clearInterval(interVal());
    }
    setIsStarted(true);
    setIsFinished(false);
    displayTimer();
    const int = setInterval(displayTimer, 1000);
    setInterVal(int);
    if (!isStopover()) {
      const date = new Date();
      setDetails({
        id: nanoid(),
        totalTime: {
          hours: 0,
          minutes: 0,
          seconds: 0
        },
        stopOverCount: 0,
        finishedTime: "00:00",
        startTime:
          date.getHours().toString().padStart(2, "0") +
          ":" +
          date.getMinutes().toString().padStart(2, "0"),
        createdDate: Date.now()
      });
    }

    setIsStopover(false);
  };

  const handleStopover = () => {
    if (interVal() !== null) {
      setIsStarted(false);
      setIsStopover(true);
      setIsFinished(false);
      clearInterval(interVal());
      setDetails({
        ...details(),
        stopOverCount: details().stopOverCount + 1
      });
    }
  };

  const handleFinish = () => {
    if (interVal() !== null) {
      const date = new Date();
      setDetails({
        ...details(),
        totalTime: timer(),
        finishedTime:
          date.getHours().toString().padStart(2, "0") +
          ":" +
          date.getMinutes().toString().padStart(2, "0"),
        createdDate: Date.now()
      });
      setIsStarted(false);
      setIsFinished(true);
      setIsStopover(false);
      clearInterval(interVal());
      setTimer({ hours: 0, minutes: 0, seconds: 0 });
      addNewWork(details());
    }
  };

  const displayTimer = () => {
    timer().seconds++;
    if (timer().seconds == 60) {
      timer().seconds = 0;
      timer().minutes++;
      if (timer().minutes == 60) {
        timer().minutes = 0;
        timer().hours++;
      }
    }
    setTimer({
      hours: timer().hours,
      minutes: timer().minutes,
      seconds: timer().seconds
    });
  };
  return (
    <article class="fixed top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 text-2xl font-medium">
      {isStarted() || isStopover() || isFinished() ? (
        <>
          <div class="flex items-center justify-center w-auto mx-auto px-4 py-2 text-center font-bold bg-primary bg-opacity-50 border border-primary text-vanilla-300 rounded-xl text-4xl">
            {timer().hours.toString().padStart(2, "0") +
              ":" +
              timer().minutes.toString().padStart(2, "0") +
              ":" +
              timer().seconds.toString().padStart(2, "0")}
          </div>
          {isFinished() ? (
            <div class="px-4 py-2 mt-2 text-center text-base font-light bg-primary text-vanilla-300 rounded-xl">
              Başlama Saati : {details().startTime}
              <br />
              Bitirme Saati : {details().finishedTime}
              <br />
              Mola Sayısı : {details().stopOverCount.toString()}
              <br />
              Çalışma Süren :{" "}
              {details().totalTime.hours.toString().padStart(2, "0")} saat,{" "}
              {details().totalTime.minutes.toString().padStart(2, "0")} dakika
              ve {details().totalTime.seconds.toString().padStart(2, "0")}{" "}
              saniye
              <br />
              Umarım çalışmanın karşılığını alırsın ve sınavda başarılı olursun!
            </div>
          ) : (
            ""
          )}
        </>
      ) : (
        ""
      )}
      {!isStarted() ? (
        <button class="btn" onClick={handleStart}>
          {isStopover() ? (
            <>
              Devam Et <FiPlayCircle />
            </>
          ) : isFinished() ? (
            <>
              Tekrar Çalışmaya Başla! <FiPlayCircle />
            </>
          ) : (
            <>
              Çalışmaya Başla <FiPlayCircle />
            </>
          )}
        </button>
      ) : (
        <button class="btn" onClick={handleStopover}>
          Mola Ver <FiPauseCircle />
        </button>
      )}
      {isStopover() ? (
        <button class="btn" onClick={handleFinish}>
          Çalışmayı Bitir <FiCheckCircle />
        </button>
      ) : (
        ""
      )}
    </article>
  );
};

export default Working;
