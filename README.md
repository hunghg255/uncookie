# uncookie - Javascript cookie

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
