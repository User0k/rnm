export default function clsx(...args: unknown[]) {
  return args
    .filter((arg) => typeof arg === 'string' && arg.length)
    .join(' ')
    .trim()
    .replace(/\s+/g, ' ');
}
