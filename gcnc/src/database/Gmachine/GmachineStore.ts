import { derived } from "svelte/store";

import GtoolsStore from "../Gtools/GtoolsStore";
import type GmachineInterface from "./GmachineInterface";

const GmachineStore = derived([GtoolsStore], ([$GtoolsStore]) => {
  const objToReturn: GmachineInterface = {
    Gtools: $GtoolsStore,
  };
  return objToReturn;
});

export default GmachineStore;
