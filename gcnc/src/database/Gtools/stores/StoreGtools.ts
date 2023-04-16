import { writable } from "svelte/store";
import type TypeGtool from "../types/TypeGtool";
import GtoolsDevFakeData from "../GtoolsDevFakeData";

const GtoolsStore = writable<TypeGtool[]>(GtoolsDevFakeData);

export default GtoolsStore;
