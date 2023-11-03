import { isPlainObject } from "./isPlainObject";
import { CookieOptions, CookieValues } from "./types";

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
