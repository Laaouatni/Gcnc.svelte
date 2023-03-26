import { writable } from "svelte/store";
import type GtoolInterface from "./GtoolInterface";

const GtoolsStore = writable<GtoolInterface[]>([]);

export default GtoolsStore;
