export interface CookieOptions {
  expires?: number | Date | string;
  path?: string;
  domain?: string;
  secure?: boolean;
  sameSite?: 'None' | 'Strict' | 'Lax';
}

interface CookieValuesObj {
  [key: string]: string;
}

export type CookieValues = string | CookieValuesObj;

