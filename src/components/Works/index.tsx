import { type Component, createSignal, Show } from "solid-js";
import { TbHistory } from "solid-icons/tb";
import WorksModal from "../Modals/WorksModal";

const Works: Component = () => {
  const [isOpen, setIsOpen] = createSignal<boolean>(false);

  const onClose = () => {
    setIsOpen(false);
  };

  const onOpen = () => {
    setIsOpen(true);
  };

  return (
    <Show
      when={isOpen()}
      fallback={
        <button
          onClick={onOpen}
          class="text-vanilla fixed top-14 left-4 opacity-50 hover:opacity-100"
        >
          <TbHistory size={24} />
        </button>
      }
    >
      <WorksModal onClose={onClose} />
    </Show>
  );
};

export default Works;
