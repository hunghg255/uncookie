import { isSSR } from "./isSSR";

export function all(cookie?: string): Record<string, string> {
  let cookieStr = cookie;

  if (!isSSR()) {
    cookieStr = cookie || document.cookie;
  }

  if (!cookieStr) return {};

  let cookies: any[] = cookieStr.split('; '),
    result: Record<string, string> = {};

  for (let i = 0, l = cookies.length; i < l; i++) {
    let item = cookies[i].split('=');
    result[decodeURI(item[0])] = decodeURI(item[1]);
  }
  return result;
};
