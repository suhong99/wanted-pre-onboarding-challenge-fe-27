import api from '../../../shared/apies/axiosInstance';
import { engPriority } from '../const/const';
import {
  CreateTodoParams,
  GetTodosResponse,
  Priority,
  Todo,
  TodoResponse,
} from '../const/type';

export const getTodos = async (): Promise<GetTodosResponse> => {
  const response = await api.get<GetTodosResponse>('/todos');
  return response.data;
};

export const createTodo = async (
  params: CreateTodoParams
): Promise<TodoResponse> => {
  const response = await api.post<TodoResponse>('/todos', params);
  return response.data;
};

export const getTodo = async ({
  id,
}: {
  id: string;
}): Promise<TodoResponse> => {
  const response = await api.get<{
    data: Todo;
  }>('/todos/' + id);
  return response.data;
};

export const updateTodo = async ({
  id,
  title,
  content,
  priority,
}: {
  id: string;
  title: string;
  content: string;
  priority: Priority;
}): Promise<TodoResponse> => {
  const response = await api.put<{
    data: Todo;
  }>('/todos/' + id, { title, content, priority: engPriority[priority] });
  return response.data;
};

export const deleteTodo = async ({ id }: { id: string }) => {
  await api.delete<{
    data: Todo;
  }>('/todos/' + id);
};
