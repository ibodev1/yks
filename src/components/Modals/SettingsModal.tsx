import { type Component } from "solid-js";
import createLocalStore from "../../helpers/createLocaleStore";
import Modal from "./Modal";

const SettingsModal: Component<{
  onClose: () => void;
}> = ({ onClose }) => {
  const [state, setState] = createLocalStore("settings", {
    name: "here"
  });
  return (
    <Modal title="Ayarlar" onClose={onClose}>
      <div class="">mahmut</div>
    </Modal>
  );
};

export default SettingsModal;
