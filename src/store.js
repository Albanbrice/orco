import create from "zustand";
import { Vector3 } from "three";

const useStore = create((set, get) => ({
  orbitEnabled: true,
  position: new Vector3(),
  direction: new Vector3(),
  actions: {
    toggleOrbit(orbitEnabled = !get().orbitEnabled) {
      set({ orbitEnabled });
    }
  },
  setPosition: (position) => set({ position }),
  setDirection: (direction) => set({ direction })
}));

export { useStore };
