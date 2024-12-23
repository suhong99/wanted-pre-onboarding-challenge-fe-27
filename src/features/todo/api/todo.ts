import api from '../../../shared/apies/axiosInstance';
import { PRIORITY_MAP } from '../const/const';
import {
  CreateTodoParams,
  GetTodosResponse,
  Priority,
  PriorityLabel,
  Todo,
  TodoResponse,
} from '../const/type';

interface GetTodosParams {
  priorityFilter?: Priority;
  keyword?: string;
  sort?: 'createdAt' | 'updatedAt' | 'priority';
  order?: 'asc' | 'desc';
  countOnly?: boolean;
}

export const getTodos = async (
  params: GetTodosParams = {}
): Promise<GetTodosResponse> => {
  console.log(params);
  const response = await api.get<GetTodosResponse>('/todos', { params });
  console.log(response.data);
  return response.data;
};

export const createTodo = async (
  params: CreateTodoParams
): Promise<TodoResponse> => {
  const response = await api.post<TodoResponse>('/todos', {
    ...params,
    priority: PRIORITY_MAP[params.priority],
  });
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
  priority: PriorityLabel;
}): Promise<TodoResponse> => {
  const response = await api.put<{
    data: Todo;
  }>('/todos/' + id, { title, content, priority: PRIORITY_MAP[priority] });
  return response.data;
};

export const deleteTodo = async ({ id }: { id: string }) => {
  await api.delete<{
    data: Todo;
  }>('/todos/' + id);
};
