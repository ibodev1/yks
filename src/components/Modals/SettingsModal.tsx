import { For, type Component } from "solid-js";
import Modal from "./Modal";
import { ISettings } from "../../types";
import SettingsItem from "../Settings/SettingsItem";
import { type SetStoreFunction } from "solid-js/store";

interface ISettingsLabel {
  name: string;
  label: string;
}

const settingsLabels: ISettingsLabel[] = [
  {
    name: "showQuote",
    label: "Atatürk Sözlerini Göster"
  },
  {
    name: "showCountDown",
    label: "Yks Geri Sayımı Göster"
  },
  {
    name: "showDatetime",
    label: "Saat ve Tarihi Göster"
  }
];

const SettingsModal: Component<{
  settings: ISettings;
  onClose: () => void;
  setSettings: SetStoreFunction<ISettings>;
}> = ({ onClose, settings, setSettings }) => {
  const handleChange = (e) => {
    setSettings({
      [e.target.name]: e.target.checked
    });
  };

  return (
    <Modal
      title="Ayarlar"
      onClose={onClose}
      footer={
        <div class="p-2 text-center">
          <a
            class="text-vanilla-800 hover:text-vanilla-900 duration-200"
            href="mailto:developer.ibrahimodev@gmail.com"
          >
            Geliştirici ile iletişime geçmek için tıkla.
          </a>
        </div>
      }
    >
      <div class="flex flex-col gap-y-2">
        <For each={settingsLabels}>
          {(setting: ISettingsLabel, i) => (
            <SettingsItem
              label={setting.label}
              name={setting.name}
              checked={settings[setting.name]}
              handleChange={handleChange}
            />
          )}
        </For>
      </div>
    </Modal>
  );
};

export default SettingsModal;
