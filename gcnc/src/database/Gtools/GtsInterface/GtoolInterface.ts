type toolType = "FRESA_SPIANATURA" | "PUNTA_ELICOIDALE" | "MASCHIATORE";
type rotationDirection = "CLOCKWISE" | "COUNTERCLOCKWISE";

export default interface GtoolInterface {
  id: number;
  diameter: number;
  numberTeeth?: number;
  type?: toolType;
  nameDescription?: string;
  angle?: number;
  length?: number;
  feedPerTeeth?: number;
  spindleSpeed?: number;
  needsCoolant?: boolean;
  rotationDirection?: rotationDirection;
  compensation?: { x: number; y: number; z: number };
}
