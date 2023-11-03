export function isPlainObject(obj: any) {
  obj = JSON.stringify(obj);
  if (typeof obj !== 'string') return false;

  if (!/^\{[\s\S]*\}$/.test(obj)) return false;

  return true;
}
