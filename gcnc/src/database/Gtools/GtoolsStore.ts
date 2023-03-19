import { writable } from "svelte/store";

type toolType = "FRESA_SPIANATURA" | "PUNTA_ELICOIDALE" | "MASCHIATORE";
type rotationDirection = "CLOCKWISE" | "COUNTERCLOCKWISE";

interface GtoolInterface {
  diameter: number;
  numberTeeth: number;
  type?: toolType;
  name?: string;
  angle?: number;
  length?: number;
  feedPerTeeth?: number;
  spindleSpeed?: number;
  needsCoolant?: boolean;
  rotationDirection?: rotationDirection;
  compensation?: { x: number; y: number; z: number };
}

interface GtoolsObjInterface {
  [toolPlaceKey: symbol]: GtoolInterface;
}

const GtoolsStore = writable<GtoolsObjInterface>({});

export default GtoolsStore;
