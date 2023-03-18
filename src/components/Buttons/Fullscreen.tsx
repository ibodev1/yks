import { type Component, createSignal } from "solid-js";
import { FiMaximize, FiMinimize } from "solid-icons/fi";

const Fullscreen: Component = () => {
  const [isFullscreen, setIsFullscreen] = createSignal<Boolean>(false);
  const elem = document.documentElement;

  function openFullscreen() {
    if (elem.requestFullscreen) {
      elem.requestFullscreen(); //@ts-ignore
    } else if (elem.webkitRequestFullscreen) {
      //@ts-ignore
      elem.webkitRequestFullscreen(); //@ts-ignore
    } else if (elem.msRequestFullscreen) {
      //@ts-ignore
      elem.msRequestFullscreen();
    }
  }

  function closeFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen(); //@ts-ignore
    } else if (document.webkitExitFullscreen) {
      //@ts-ignore
      document.webkitExitFullscreen(); //@ts-ignore
    } else if (document.msExitFullscreen) {
      //@ts-ignore
      document.msExitFullscreen();
    }
  }

  document.documentElement.onfullscreenchange = () => {
    setIsFullscreen(document.fullscreenElement !== null);
  };

  const toggleFullScreen = (): void => {
    if (!isFullscreen()) {
      openFullscreen();
    } else {
      closeFullscreen();
    }
  };

  return (
    <button onClick={toggleFullScreen} class="text-vanilla fixed top-4 right-4">
      {isFullscreen() ? <FiMinimize size={24} /> : <FiMaximize size={24} />}
    </button>
  );
};

export default Fullscreen;
