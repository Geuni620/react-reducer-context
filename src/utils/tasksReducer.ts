type Task = {
  id: number;
  text: string;
  done: boolean;
};

type Action =
  | { type: 'added'; id: number; text: string }
  | { type: 'changed'; task: Task }
  | { type: 'deleted'; id: number };

export const tasksReducer = (state: Task[], action: Action) => {
  switch (action.type) {
    case 'added':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];

    case 'changed':
      return state.map((task) =>
        task.id === action.task.id ? action.task : task,
      );

    case 'deleted':
      return state.filter((task) => task.id !== action.id);

    default:
      throw new Error('Unhandled action');
  }
};
