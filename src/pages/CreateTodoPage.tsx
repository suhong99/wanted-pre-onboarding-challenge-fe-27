import { FormEvent, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { createTodo } from '../features/todo/api/todo';

const CreateTodoPage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // useMutation 정의
  const { mutate, isPending } = useMutation({
    mutationFn: createTodo,
    onSuccess: () => {
      setTitle(''); // 입력 필드 초기화
      setContent('');
    },
    onError: () => {
      alert('Failed to create todo: ');
    },
  });

  const onCreateTodo = (e: FormEvent) => {
    e.preventDefault();
    mutate({ title, content });
  };

  return (
    <div>
      <h1>Create Todo</h1>
      <form onSubmit={onCreateTodo}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Content:</label>
          <input
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button type="submit" disabled={isPending}>
          {isPending ? 'Creating...' : 'Create Todo'}
        </button>
      </form>
    </div>
  );
};

export default CreateTodoPage;
