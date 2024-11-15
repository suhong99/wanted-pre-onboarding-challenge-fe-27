export interface Todo {
  title: string;
  content: string;
  id: string;
  createdAt: string;
  updatedAt: string;
  priority: PriorityLabel;
}

export interface GetTodosResponse {
  data: Todo[];
}

export type Priority = 'urgent' | 'normal' | 'low' | '';
export type PriorityLabel = '상' | '중' | '하' | '';
export type SortOption = 'createdAt' | 'updatedAt' | 'priority';
export type OrderOption = 'asc' | 'desc';

export interface CreateTodoParams {
  title: string;
  content: string;
  priority: PriorityLabel;
}

export interface TodoResponse {
  data: Todo;
}
