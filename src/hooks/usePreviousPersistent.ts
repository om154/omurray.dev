'use client'

import { useState } from "react";

export const usePreviousPersistent = <T,>(value: T): T | null => {
  const [state, setState] = useState<{ value: T; prev: T | null }>({
    value,
    prev: null,
  });

  if (value !== state.value) {
    setState({
      value,
      prev: state.value,
    });
  }

  return state.prev;
};
