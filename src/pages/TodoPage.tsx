import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '../shared/const/query';
import { getTodos } from '../features/todo/api/todo';
import { useNavigate } from 'react-router';
import { useState } from 'react';

const TodoPage = () => {
  const [priorityFilter, setPriorityFilter] = useState<
    'urgent' | 'normal' | 'low' | ''
  >('');
  const [keyword, setKeyword] = useState('');
  const [sort, setSort] = useState<'createdAt' | 'updatedAt' | 'priority'>(
    'createdAt'
  );
  const [order, setOrder] = useState<'asc' | 'desc'>('desc');

  // Fetch todos with the selected filters
  const { data } = useQuery({
    queryKey: [QUERY_KEY.todos, priorityFilter, keyword, sort, order],
    queryFn: () => getTodos({ priorityFilter, keyword, sort, order }),
  });
  const navigate = useNavigate();

  return (
    <div>
      <h1>Todo List</h1>

      <div>
        <select
          value={priorityFilter}
          onChange={(e) =>
            setPriorityFilter(e.target.value as 'urgent' | 'normal' | 'low')
          }
        >
          <option value="">All</option>
          <option value="urgent">Urgent</option>
          <option value="normal">Normal</option>
          <option value="low">Low</option>
        </select>

        <input
          type="text"
          placeholder="Search by keyword"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />

        <select
          value={sort}
          onChange={(e) =>
            setSort(e.target.value as 'createdAt' | 'updatedAt' | 'priority')
          }
        >
          <option value="createdAt">Created At</option>
          <option value="updatedAt">Updated At</option>
          <option value="priority">priority</option>
        </select>

        <select
          value={order}
          onChange={(e) => setOrder(e.target.value as 'asc' | 'desc')}
        >
          <option value="desc">Descending</option>
          <option value="asc">Ascending</option>
        </select>
      </div>

      <table>
        <thead>
          <tr>
            <th>제목</th>
            <th>생성일</th>
            <th>수정일</th>
            <th>우선순위</th>
          </tr>
        </thead>
        <tbody>
          {!data ? (
            <tr>
              <td colSpan={4} style={{ textAlign: 'center' }}>
                데이터가 없습니다.
              </td>
            </tr>
          ) : (
            data.data.map(({ id, title, createdAt, updatedAt, priority }) => (
              <tr
                key={id}
                style={{ cursor: 'pointer' }}
                onClick={() => navigate(`/detail/${id}`)}
              >
                <td>{title}</td>
                <td>{new Date(createdAt).toLocaleString()}</td>
                <td>{new Date(updatedAt).toLocaleString()}</td>
                <td>{priority}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TodoPage;
