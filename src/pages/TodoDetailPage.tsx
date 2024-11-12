import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getTodo, updateTodo, deleteTodo } from '../features/todo/api/todo'; // API 요청 함수
import { QUERY_KEY } from '../shared/const/query';
import { Priority } from '../features/todo/const/type';
import { PRIORITY_OPTIONS } from '../features/todo/const/const';

const TodoDetailPage = () => {
  const { id } = useParams<{ id: string }>(); // URL 파라미터에서 ID를 가져옵니다.
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: ['todo/' + id],
    queryFn: () => getTodo({ id: id! }),
  });

  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [priority, setPriority] = useState<Priority>('상');

  const mutationUpdate = useMutation({
    mutationFn: updateTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.todos, 'todo/' + id],
      });
      setIsEditing(false); // 수정 모드 해제
    },
  });

  const mutationDelete = useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.todos, 'todo/' + id],
      });
      navigate('/');
    },
  });

  const handleBack = () => {
    navigate('/');
  };

  if (isLoading) return <div>로딩 중...</div>;

  return (
    <div
      style={{
        maxWidth: '600px',
        margin: '0 auto',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '8px',
      }}
    >
      {data ? (
        <>
          <h1 style={{ textAlign: 'center' }}>
            {isEditing ? '수정중...' : '상세 페이지'}
          </h1>
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}
          >
            {isEditing ? (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                }}
              >
                <label>제목:</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  style={{ padding: '8px', fontSize: '16px' }}
                />
                <label>내용:</label>
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  style={{ padding: '8px', fontSize: '16px', height: '100px' }}
                />
                <div
                  style={{ display: 'flex', gap: '10px', marginTop: '10px' }}
                >
                  <button
                    onClick={() => {
                      mutationUpdate.mutate({
                        id: id!,
                        title,
                        content,
                        priority,
                      });
                    }}
                  >
                    수정 완료
                  </button>
                  <button onClick={() => setIsEditing(false)}>취소</button>
                </div>
              </div>
            ) : (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                }}
              >
                <div>
                  <label>제목:</label>
                  <div
                    style={{
                      padding: '8px',
                      backgroundColor: '#f9f9f9',
                      borderRadius: '4px',
                    }}
                  >
                    {data.data.title}
                  </div>
                </div>
                <div>
                  <label>내용:</label>
                  <div
                    style={{
                      padding: '8px',
                      backgroundColor: '#f9f9f9',
                      borderRadius: '4px',
                    }}
                  >
                    {data.data.content}
                  </div>
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
                <div
                  style={{ display: 'flex', gap: '10px', marginTop: '10px' }}
                >
                  <button onClick={() => setIsEditing(true)}>수정하기</button>
                  <button
                    onClick={() => {
                      mutationDelete.mutate({ id: id! });
                    }}
                  >
                    삭제하기
                  </button>
                </div>
              </div>
            )}
          </div>
        </>
      ) : (
        <div style={{ textAlign: 'center', color: '#999' }}>
          데이터가 없습니다
        </div>
      )}
      <button onClick={handleBack} style={{ marginTop: '20px' }}>
        뒤로 가기
      </button>
    </div>
  );
};

export default TodoDetailPage;
