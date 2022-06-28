import {
  useState, useEffect, Dispatch, SetStateAction,
} from 'react';

type Response<T> = [
    T,
    Dispatch<SetStateAction<T>>
];

function usePersistedState<T>(key: string, initialState: T): Response<T> {
  const [state, setState] = useState(() => {
    const storageValue = localStorage.getItem(key);

    if (storageValue !== undefined && storageValue !== null && storageValue !== 'null') {
      let value;

      if (typeof storageValue === 'string') {
        try {
          value = JSON.parse(storageValue);
        } catch {
          value = storageValue;
        }
      } else {
        value = storageValue;
      }

      return value;
    }
    return initialState;
  });

  useEffect(() => {
    let storageValue = state;
    if (state && typeof state === 'object') {
      storageValue = JSON.stringify(state);
    }

    localStorage.setItem(key, storageValue);
  }, [key, state]);

  return [state, setState];
}

export default usePersistedState;
