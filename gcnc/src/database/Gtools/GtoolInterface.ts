type toolType = "FRESA" | "PUNTA" | "MASCHIATORE";
type rotationDirection = "CLOCKWISE" | "COUNTERCLOCKWISE";

export default interface GtoolInterface {
  id: number;
  diameter: number;
  isActived: boolean;
  isEditChecked: boolean;
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
