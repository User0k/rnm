type ClassName = string | number | boolean | null | undefined;
type ClassNames = ClassName | Record<string, ClassName>;

export default function clsx(...args: ClassNames[]) {
  const classes = [];

  for (const arg of args) {
    if (typeof arg === 'object' && arg !== null) {
      for (const key in arg) {
        if (arg[key]) {
          classes.push(key);
        }
      }
      continue;
    }

    if (typeof arg === 'string' && arg.length) {
      classes.push(arg);
    }
  }

  return classes.join(' ').trim().replace(/\s+/g, ' ');
}
