import { Instance, types } from 'mobx-state-tree';

export const TaskModel = types.model({
    // идентификатор модели
    id: types.identifier,
    // заголовок
    title: types.string,
    // статус - завершена задача или нет
    isCompleted: types.optional(types.boolean, false),
    // дата создания
    createdAt: types.number,
});

// тип нашей модели
export type TaskModel = Instance<typeof TaskModel>;
