import { writable } from "svelte/store";

const GtoolsPopupIsOpen = writable<boolean>(false);

export default GtoolsPopupIsOpen;
