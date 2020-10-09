import { createContext } from 'react';
import { RootStore } from '../models/store';

export const StoreContext = createContext<RootStore | null>(null);
