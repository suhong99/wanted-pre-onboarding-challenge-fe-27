import { useNavigate } from 'react-router';
import styles from 'features/todo/Todo.module.css';
import { PriorityLabel } from '../const/type';

interface Props {
  data:
    | {
        id: string;
        title: string;
        createdAt: string;
        updatedAt: string;
        priority: PriorityLabel;
      }[]
    | null;
}

const TodoTable = ({ data }: Props) => {
  const navigate = useNavigate();

  return (
    <table className={styles.todo_table}>
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
            <td colSpan={4} className={styles.todo_no_data}>
              데이터가 없습니다.
            </td>
          </tr>
        ) : (
          data.map(({ id, title, createdAt, updatedAt, priority }) => (
            <tr key={id} onClick={() => navigate(`/detail/${id}`)}>
              <td>{title}</td>
              <td>{new Date(createdAt).toLocaleString()}</td>
              <td>{new Date(updatedAt).toLocaleString()}</td>
              <td>{priority}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default TodoTable;
