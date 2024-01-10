<p align="center">
<a href="https://www.npmjs.com/package/uncookie" target="_blank" rel="noopener noreferrer">
<img src="https://api.iconify.design/twemoji:cookie.svg?color=%23fdb4e2" alt="logo" width='100'/></a>
</p>

<p align="center">
  A library to parse cookie string to object and vice versa.
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/uncookie" target="_blank" rel="noopener noreferrer"><img src="https://badge.fury.io/js/csvs-parsers.svg" alt="NPM Version" /></a>
  <a href="https://www.npmjs.com/package/uncookie" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/npm/dt/csvs-parsers.svg?logo=npm" alt="NPM Downloads" /></a>
  <a href="https://bundlephobia.com/result?p=uncookie" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/bundlephobia/minzip/uncookie" alt="Minizip" /></a>
  <a href="https://github.com/hunghg255/uncookie/graphs/contributors" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/all_contributors-1-orange.svg" alt="Contributors" /></a>
  <a href="https://github.com/hunghg255/uncookie/blob/main/LICENSE" target="_blank" rel="noopener noreferrer"><img src="https://badgen.net/github/license/hunghg255/uncookie" alt="License" /></a>
</p>

:cookie: A simple, lightweight JavaScript API for handling browser cookies, it is easy to pick up and use, has a reasonable footprint (~1.4kb) (gzipped: 0.78kb), and has no dependencies. It should not interfere with any JavaScript libraries or frameworks.

**Features:**

🚀 Has no dependencies

🌱 Works in all browsers

🍁 Support TypeScript, including [d.ts]

📦 Supports AMD/CommonJS

🔥 Tree-shakable

💥 [index.min.js](https://unpkg.com/uncookie@1.0.0/dist/index.min.js) 1.4kb(gzipped: 0.78kb)


## Installation

```bash
npm install uncookie
```

## Usage

```javascript
import * as cookie from 'uncookie';

cookie.set('name', 'value', 1); // Set cookie
cookie.get('name'); // Get cookie
cookie.remove('name'); // Remove cookie

// # Options
cookie.set('name', 'value', {
  'expires': 30,
  'path': '/',
  'domain':''
});
```

## API

```ts
cookie.set(name, value, options)
```

```ts
interface CookieOptions {
    expires?: number | Date | string;
    path?: string;
    domain?: string;
    secure?: boolean;
    sameSite?: 'None' | 'Strict' | 'Lax';
}
interface CookieValuesObj {
    [key: string]: string;
}
type CookieValues = string | CookieValuesObj;

declare function all(cookie?: string): Record<string, string>;

declare function get(name: string): string | false;
declare function set(name: CookieValues, value: CookieValues, options?: CookieOptions): void;
declare function remove(names: string | string[]): string | string[];
declare function clear(name?: string | string[]): string | string[];
```

## Browser Support

```html
<script src="https://unpkg.com/uncookie/dist/index.min.js"></script>

<script type="text/javascript">
  cookie.set("test", "tank");
</script>

```
