import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '../shared/const/query';
import { getTodos } from '../features/todo/api/todo';
import { useState } from 'react';
import styles from 'features/todo/Todo.module.css';
import Search from '../features/todo/components/Search';
import TodoTable from '../features/todo/components/TodoTable';
import { OrderOption, Priority, SortOption } from '../features/todo/const/type';

const TodoPage = () => {
  const [priorityFilter, setPriorityFilter] = useState<Priority>('');
  const [keyword, setKeyword] = useState('');
  const [sort, setSort] = useState<SortOption>('createdAt');
  const [order, setOrder] = useState<OrderOption>('desc');
  const { data } = useQuery({
    queryKey: [QUERY_KEY.todos, priorityFilter, keyword, sort, order],
    queryFn: () => getTodos({ priorityFilter, keyword, sort, order }),
  });

  return (
    <div className={styles.todo_page}>
      <h1 className={styles.todo_header}>Todo List</h1>
      <Search
        priorityFilter={priorityFilter}
        setPriorityFilter={setPriorityFilter}
        keyword={keyword}
        setKeyword={setKeyword}
        sort={sort}
        setSort={setSort}
        order={order}
        setOrder={setOrder}
      />

      <TodoTable data={data?.data || null} />
    </div>
  );
};

export default TodoPage;
