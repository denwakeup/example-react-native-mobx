import { Instance, types } from 'mobx-state-tree';
import { TaskStore } from '../../task/models/store';

export const RootStore = types.model({
    tasksStore: TaskStore,
});

export type RootStore = Instance<typeof RootStore>;
