import { all } from "./all";
import { getKeys } from "./getKeys";
import { remove } from "./remove";

export function clear(name?: string | string[]) {
  return name ? remove(name) : remove(getKeys(all()));
};
