'use client';

import React, { FC, PropsWithChildren, createContext, useState } from 'react';

type DialogViews = 'FORGOT_PASSWORD' | 'CHANGE_PASSWORD' | 'INIT_CHANGE_MY_EMAIL' | 'INIT_CHANGE_MY_PHONE';

interface State {
  view?: DialogViews;
  data?: unknown;
  isOpen: boolean;
}

const initialState: State = {
  view: undefined,
  isOpen: false,
  data: null,
};

const DialogContext = createContext<[State, React.Dispatch<React.SetStateAction<State>> | undefined]>([
  initialState,
  undefined,
]);

export const DialogProvider: FC<PropsWithChildren> = ({ children }) => {
  return <DialogContext.Provider value={useState(initialState)}>{children}</DialogContext.Provider>;
};

export function useDialog() {
  const context = React.useContext(DialogContext);
  if (context === undefined || context[1] === undefined) {
    throw new Error(`useDialog must be used within a DialogProvider`);
  }

  const [state, setState] = context;

  const openDialog = (view: DialogViews, data?: unknown) =>
    setState((state) => ({ ...state, view, isOpen: true, data }));
  const closeDialog = () => setState((state) => ({ ...state, view: undefined, isOpen: false, data: null }));

  return {
    ...state,
    openDialog,
    closeDialog,
  };
}
