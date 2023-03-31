import { writable } from "svelte/store";
import type GtoolInterface from "./GtoolInterface";
import GtoolsDevFakeData from "./GtoolsDevFakeData.js";

const GtoolsStore = writable<GtoolInterface[]>(GtoolsDevFakeData);

export default GtoolsStore;
