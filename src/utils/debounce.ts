const DEFAULT_TIMEOUT = 1000;

export default function Debounce(fn: any, timeout: number = DEFAULT_TIMEOUT) {
  let retry: ReturnType<typeof setTimeout>;

  return function newFn(...args: any[]) {
    if (retry !== undefined) {
      clearTimeout(retry);
    }

    retry = setTimeout(() => {
      fn(...args);
    }, timeout);
  };
}
