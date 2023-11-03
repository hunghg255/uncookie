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
