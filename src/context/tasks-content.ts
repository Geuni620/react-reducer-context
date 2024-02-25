import { createContext, Dispatch } from 'react';
import { type Task } from 'src/App';

type Action =
  | { type: 'added'; id: number; text: string }
  | { type: 'changed'; task: Task }
  | { type: 'deleted'; id: number };

export const TasksContext = createContext<Task[]>([]);
export const TasksDispatchContext = createContext<Dispatch<Action> | null>(
  null,
);
