import { For, type Component, createSignal } from "solid-js";
import Modal from "./Modal";
import { ISettings } from "../../types";
import SettingsItem from "../Settings/SettingsItem";
import { type SetStoreFunction } from "solid-js/store";
import toast from "solid-toast";

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
  const [imageUrl, setImageUrl] = createSignal<string>("");

  const handleChange = (e) => {
    setSettings({
      [e.target.name]: e.target.checked
    });
  };

  const setDefaultImage = () => {
    setSettings({
      ...settings,
      bgImage: "../../../assets/bg.jpeg"
    });
    toast.success("Arkaplan resmi güncellendi.");
  };

  const onUploadImage = async (e) => {
    const file = e.target.files[0];
    if (file && /image-*/g.test(file.type)) {
      const blob = (window.URL || window.webkitURL).createObjectURL(file);
      setSettings({
        ...settings,
        bgImage: blob
      });
      toast.success("Arkaplan resmi güncellendi.");
    } else {
      toast.error("Yüklediğiniz dosya resim formatında değil.");
    }
  };

  const onUploadImageFromUrl = (imageUrl: string) => {
    fetch(imageUrl)
      .then((response) => {
        const contentType = response.headers.get("content-type");
        if (/image-*/g.test(contentType)) {
          setSettings({
            ...settings,
            bgImage: imageUrl
          });
          toast.success("Arkaplan resmi güncellendi.");
        } else {
          toast.error("Girdiğiniz url resim formatında değil.");
        }
      })
      .catch(() => {
        setSettings({
          ...settings,
          bgImage: "../../../assets/bg.jpeg"
        });
        toast.error("Bir hata oluştu!");
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
      <div class="p-2">
        <div class="text-xl font-bold text-secondary mb-2">Tercihleriniz</div>
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
      </div>
      <div class="p-2">
        <div class="text-xl font-bold text-secondary mb2">Arkaplan Resmi</div>
        <div class="grid grid-cols-1 lg:grid-cols-2 grid-rows-1 gap-2">
          <div class="col-span-1">
            <div class="text-lg font-medium text-secondary-300 mb-2">
              Varsayılan Resim
            </div>
            <button
              class="w-full h-44 rounded-md overflow-hidden"
              onClick={setDefaultImage}
            >
              <img
                src="../../../assets/bg.jpeg"
                alt="defaultbg"
                class="object-cover w-full h-full object-center"
              />
            </button>
          </div>
          <div class="col-span-1">
            <div class="flex flex-col w-full h-full">
              <div class="flex-1">
                <label for="bgimage" class="cursor-pointer">
                  <div class="text-lg font-medium text-secondary-300 mb-2">
                    Bilgisayardan Yükle
                  </div>
                  <div class="w-full h-10 flex items-center justify-center border border-dashed border-secondary-400 text-secondary-400">
                    Resim Eklemek İçin Tıkla
                  </div>
                  <input
                    type="file"
                    name="bgimage"
                    id="bgimage"
                    class="sr-only"
                    onInput={onUploadImage}
                  />
                </label>
              </div>
              <div class="flex-1">
                <div class="text-lg font-medium text-secondary-300 mb-2">
                  Url den içe aktar
                </div>
                <input
                  type="url"
                  name="imageUrl"
                  id="imageUrl"
                  class="w-full h-8 rounded-md p-2 outline-0"
                  placeholder="Resmin url adresi"
                  onChange={(e) => setImageUrl(e.target.value)}
                />
                <button
                  onClick={() => {
                    onUploadImageFromUrl(imageUrl());
                  }}
                  class="w-full h-8 bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 duration-200 text-center font-semibold rounded-md text-white mt-2"
                >
                  Ekle
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default SettingsModal;
