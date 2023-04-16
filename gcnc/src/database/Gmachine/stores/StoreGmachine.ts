import { derived } from "svelte/store";

import GtoolsStore from "../../Gtools/stores/StoreGtools";
import type TypeGmachine from "../types/TypeGmachine";

const StoreGmachine = derived([GtoolsStore], ([$GtoolsStore]) => {
  const objToReturn: TypeGmachine = {
    Gtools: $GtoolsStore,
  };
  return objToReturn;
});

export default StoreGmachine;
