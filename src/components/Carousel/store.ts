import { writable } from "svelte/store";

export const currentIndex = writable<number>(9);
export const videos = writable<string[]>();