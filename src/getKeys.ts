export function getKeys(obj: Record<string, any>) {
  let names = [], name = '';
  for (name in obj) {
    names.push(name);
  }
  return names;
}
