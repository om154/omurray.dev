'use client'

import { useState } from "react";

export const usePreviousPersistent = (value: any) => {
  const [state, setState] = useState<any>({
    value: value,
    prev: null,
  });

  const current = state.value;

  if (value !== current) {
    setState({
      value: value,
      prev: current,
    });
  }

  return state.prev;
};
