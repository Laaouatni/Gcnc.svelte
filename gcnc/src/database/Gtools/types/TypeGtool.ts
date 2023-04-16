type TypeTool = "FRESA" | "PUNTA" | "MASCHIATORE";
type TypeRotationDirection = "ORARIO" | "ANTIORARIO";

type TypeGtool = {
  id: number;
  diameter: number;
  isActived: boolean;
  isEditChecked: boolean;
  numberTeeth?: number;
  type?: TypeTool;
  nameDescription?: string;
  angle?: number;
  length?: number;
  feedPerTeeth?: number;
  spindleSpeed?: number;
  needsCoolant?: boolean;
  rotationDirection?: TypeRotationDirection;
  compensation?: { x: number; y: number; z: number };
};

export default TypeGtool;
