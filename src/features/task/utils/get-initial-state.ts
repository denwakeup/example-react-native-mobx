import { SnapshotIn } from 'mobx-state-tree';
import { TaskStore } from '../models/store';

export const getTasksInitialState = (): SnapshotIn<TaskStore> => ({
    entities: [],
});
