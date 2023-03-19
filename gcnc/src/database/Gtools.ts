import { writable } from "svelte/store";

type toolType = "FRESA_SPIANATURA" | "PUNTA_ELICOIDALE" | "MASCHIATORE"
type rotationDirection = "CLOCKWISE" | "COUNTERCLOCKWISE";

export interface GtoolsInterface {
  [key: number]: {
    diameter: number;
    numberTeeth: number;
    type?: toolType;
    name?: string;
    length?: number;
    feedRate?: number;
    spindleSpeed?: number;
    needsCoolant?: boolean;
    rotationDirection?: rotationDirection;
    compensation?: { x: number | 0; y: number | 0; z: number|0};
  };
}

export const Gtools = writable({} as GtoolsInterface);
