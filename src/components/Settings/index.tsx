import { type Component, createSignal, Show } from "solid-js";
import { FiSettings } from "solid-icons/fi";
import SettingsModal from "../Modals/SettingsModal";
import { ISettings } from "../../types";
import { type SetStoreFunction } from "solid-js/store";
const Settings: Component<{
  settings: ISettings;
  setSettings: SetStoreFunction<ISettings>;
}> = ({ settings, setSettings }) => {
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
      <SettingsModal
        settings={settings}
        onClose={onClose}
        setSettings={setSettings}
      />
    </Show>
  );
};

export default Settings;
