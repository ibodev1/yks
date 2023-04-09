import type { Component } from "solid-js";

const SettingsItem: Component<{
  checked: boolean;
  handleChange: (e: any) => void;
  label: string;
  name: string;
}> = ({ checked, handleChange, label, name }) => {
  return (
    <label
      for={name}
      class="relative flex justify-between items-center p-2 text-lg !cursor-pointer"
    >
      {label}
      <input
        type="checkbox"
        name={name}
        id={name}
        checked={checked}
        onChange={handleChange}
        class="absolute left-1/2 -translate-x-1/2 w-full h-full peer appearance-none rounded-md"
      />
      <span class="!cursor-pointer w-14 h-6 flex items-center flex-shrink-0 ml-4 bg-gray-300 rounded-full duration-300 ease-in-out peer-checked:bg-green-400 after:w-8 after:h-8 after:bg-white after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-6"></span>
    </label>
  );
};

export default SettingsItem;
