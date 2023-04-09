import type { Component, JSX } from "solid-js";
import { FiX } from "solid-icons/fi";

const Modal: Component<{
  children?: JSX.Element;
  onClose: () => void;
  title: string;
}> = (props: any) => {
  return (
    <div class="fixed top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 bg-vanilla min-w-[25rem] max-w-screen-[25rem] max-h-[75%] overflow-y-auto rounded-lg z-[999]">
      <div class="sticky top-0 bg-vanilla flex items-center justify-between border-b border-primary text-primary-700 p-2 z-50">
        <div class="text-xl font-semibold">{props.title}</div>
        <button class="text-lg text-secondary" onClick={props.onClose}>
          <FiX />
        </button>
      </div>
      <div class="relative">{props.children}</div>
    </div>
  );
};

export default Modal;
