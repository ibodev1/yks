import { createEffect} from "solid-js";
import { createStore } from "solid-js/store";

function createLocalStore<T extends object>(name: string, value: T) {
  const stored = localStorage.getItem(name),
    [state, setState] = createStore<T>(stored ? JSON.parse(stored) : value);
  createEffect(() => localStorage.setItem(name, JSON.stringify(state)));
  return [state, setState] as const;
}

export default createLocalStore;