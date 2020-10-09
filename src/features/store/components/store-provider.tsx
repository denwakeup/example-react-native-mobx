import React, { FunctionComponent } from 'react';
import { useLocalStore } from 'mobx-react-lite';
import { createStore } from '../utils/create-store';
import { StoreContext } from '../context';

export const StoreProvider: FunctionComponent = ({ children }) => {
    const store = useLocalStore(createStore);

    return (
        <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
    );
};
