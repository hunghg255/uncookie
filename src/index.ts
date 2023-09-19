import { CookieOptions, CookieValues } from './types';

function isSSR() {
  return typeof window !== 'undefined';
}

function getKeys(obj: Record<string, any>) {
  let names = [], name = '';
  for (name in obj) {
    names.push(name);
  }
  return names;
}

function isPlainObject(obj: any) {
  obj = JSON.stringify(obj);
  if (typeof obj !== 'string') return false;

  if (!/^\{[\s\S]*\}$/.test(obj)) return false;

  return true;
}

function isArray(value: any) {
  return value instanceof Array;
}
function toArray(value: any) {
  return Array.prototype.slice.call(value);
}

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

export function get(name: string) {
  let nameEQ = name + '=', ca = document.cookie.split(';'), c: any;

  for (let i = 0; i < ca.length; i++) {
    c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1, c.length);
    }

    if (c.indexOf(nameEQ) == 0) {
      return decodeURI(c.substring(nameEQ.length, c.length));
    }
  }
  return false;
};

export function set(
  name: CookieValues,
  value: CookieValues,
  options?: CookieOptions
) {
  if (typeof name === 'string') {
    let opt = (
        isPlainObject(options) ? options : { expires: options }
      ) as CookieOptions,
      path = opt.path !== undefined ? `;path=${opt.path};path=/` : ';path=/',
      domain = opt.domain ? `;domain=${opt.domain}` : '',
      secure = opt.secure ? ';secure' : '',
      expires = opt.expires !== undefined ? opt.expires : ('' as any),
      sameSite = opt.sameSite ? `;SameSite=${opt.sameSite}` : '';

    if (typeof expires === 'string' && expires !== '') {
      expires = new Date(expires);
    } else if (typeof expires === 'number') {
      expires = new Date(+new Date() + 1000 * 60 * 60 * 24 * expires);
    }

    if (expires !== '' && 'toGMTString' in expires) {
      expires = `;expires=${expires.toGMTString()}`;
    }

    document.cookie = `${name}=${
      encodeURI(value as any) + expires + path + domain + secure + sameSite
    }`;
  }
};

export function remove(names: string | string[]) {
  let namesV: any = isArray(names) ? names : toArray(arguments);
  for (let i = 0, l = names.length; i < l; i++) {
    //@ts-ignore
    set(namesV[i], '', -1);
  }
  return names;
};

export function clear(name?: string | string[]) {
  return name ? remove(name) : remove(getKeys(all()));
};

if (isSSR()) {
  // @ts-ignore
  window.cookie = {
    all,
    get,
    set,
    remove,
    clear,
  };
}
