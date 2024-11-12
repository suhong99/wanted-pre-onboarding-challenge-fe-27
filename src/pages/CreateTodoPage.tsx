import { FormEvent, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { createTodo } from '../features/todo/api/todo';
import { Priority } from '../features/todo/const/type';
import { PRIORITY_OPTIONS } from '../features/todo/const/const';

const CreateTodoPage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [priority, setPriority] = useState<Priority>('상');

  // useMutation 정의
  const { mutate, isPending } = useMutation({
    mutationFn: createTodo,
    onSuccess: () => {
      setTitle('');
      setContent('');
      setPriority('상');
    },
    onError: () => {
      alert('Failed to create todo.');
    },
  });

  const onCreateTodo = (e: FormEvent) => {
    e.preventDefault();
    mutate({ title, content, priority });
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
        <div>
          <label>Priority:</label>
          {PRIORITY_OPTIONS.map((option) => (
            <label key={option}>
              <input
                type="radio"
                name="priority"
                value={option}
                checked={priority === option}
                onChange={() => setPriority(option)}
              />
              {option}
            </label>
          ))}
        </div>
        <button type="submit" disabled={isPending}>
          {isPending ? 'Creating...' : 'Create Todo'}
        </button>
      </form>
    </div>
  );
};

export default CreateTodoPage;
