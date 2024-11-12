export interface Todo {
  title: string;
  content: string;
  id: string;
  createdAt: string;
  updatedAt: string;
  priority: Priority;
}

export interface GetTodosResponse {
  data: Todo[];
}

export interface CreateTodoParams {
  title: string;
  content: string;
  priority: Priority;
}

export interface TodoResponse {
  data: Todo;
}

export type Priority = '상' | '중' | '하';
