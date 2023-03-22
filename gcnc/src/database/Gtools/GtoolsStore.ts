import { writable } from "svelte/store";
import type GtoolInterface from "./GtsInterface/GtoolInterface";

const GtoolsStore = writable<GtoolInterface[]>([]);

export default GtoolsStore;
