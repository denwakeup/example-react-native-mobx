import { getTasksInitialState } from '../../task/utils/get-initial-state';
import { RootStore } from '../models/store';
import { connectReduxDevtools } from 'mst-middlewares';

export const createStore = (): RootStore => {
    const store = RootStore.create({
        tasksStore: getTasksInitialState(),
    });

    if (__DEV__) {
        connectReduxDevtools(require('remotedev'), store);
    }

    return store;
};
