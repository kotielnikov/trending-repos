import { useCallback, useState } from 'react';

export default function useLocalStorageState<T>(
  key: string,
  initialInputValue: T,
) {
  const initialStorageValue = localStorage.getItem(key);
  const initialValue: T =
    initialStorageValue !== null
      ? JSON.parse(initialStorageValue)
      : initialInputValue;

  const [state, setState] = useState(initialValue);

  const handleSetState: typeof setState = useCallback(
    value => {
      setState(value);
      localStorage.setItem(key, JSON.stringify(value));
    },
    [key],
  );

  return [state, handleSetState] as const;
}
