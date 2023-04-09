import { type Component, createSignal, createEffect, Show } from "solid-js";
import { FiSettings } from "solid-icons/fi";
import SettingsModal from "./Modals/SettingsModal";
const Settings: Component = () => {
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
        <button onClick={onOpen} class="text-vanilla fixed top-4 left-4">
          <FiSettings size={24} />
        </button>
      }
    >
      <SettingsModal onClose={onClose} />
    </Show>
  );
};

export default Settings;
