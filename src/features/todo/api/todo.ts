import api from '../../../shared/apies/axiosInstance';

interface Todo {
  title: string;
  content: string;
  id: string;
  createdAt: string;
  updatedAt: string;
}

interface GetTodosResponse {
  data: Todo[];
}

interface CreateTodoParams {
  title: string;
  content: string;
}

interface TodoResponse {
  data: Todo;
}

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
}: {
  id: string;
  title: string;
  content: string;
}): Promise<TodoResponse> => {
  const response = await api.put<{
    data: Todo;
  }>('/todos/' + id, { title, content });
  return response.data;
};

export const deleteTodo = async ({ id }: { id: string }) => {
  await api.delete<{
    data: Todo;
  }>('/todos/' + id);
};
