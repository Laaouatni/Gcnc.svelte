import { derived } from "svelte/store";

import GtoolsStore from "../Gtools/GtoolsStore";
import type GmachineInterface from "./GmachineInterface";

const GmachineStore = derived([GtoolsStore], ([$GtoolsStore]) => { 
  return {
    Gtools: $GtoolsStore,
  } as GmachineInterface;
});

export default GmachineStore;