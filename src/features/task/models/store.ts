import { Instance, types } from 'mobx-state-tree';
import { TaskModel } from './task';

export const TaskStore = types.model({
    entities: types.array(TaskModel),
});

export type TaskStore = Instance<typeof TaskStore>;
