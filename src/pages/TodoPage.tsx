import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '../shared/const/query';
import { getTodos } from '../features/todo/api/todo';
import { useNavigate } from 'react-router';

const TodoPage = () => {
  const { data } = useQuery({ queryKey: [QUERY_KEY.todos], queryFn: getTodos });
  const navigate = useNavigate();

  return (
    <div>
      <h1>Todo List</h1>
      <table>
        <thead>
          <tr>
            <th>제목</th>
            <th>생성일</th>
            <th>수정일</th>
          </tr>
        </thead>
        <tbody>
          {!data ? (
            <tr>
              <td colSpan={3} style={{ textAlign: 'center' }}>
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
                <td>우선순위 : {priority}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TodoPage;
