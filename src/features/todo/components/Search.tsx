import styles from 'features/todo/Todo.module.css';
import { OrderOption, Priority, SortOption } from '../const/type';

interface Props {
  priorityFilter: Priority;
  setPriorityFilter: (value: Priority) => void;
  keyword: string;
  setKeyword: (value: string) => void;
  sort: SortOption;
  setSort: (value: SortOption) => void;
  order: OrderOption;
  setOrder: (value: OrderOption) => void;
}

const Search = ({
  priorityFilter,
  setPriorityFilter,
  keyword,
  setKeyword,
  sort,
  setSort,
  order,
  setOrder,
}: Props) => (
  <div className={styles.todo_filters}>
    <select
      className={styles.todo_filter_select}
      value={priorityFilter}
      onChange={(e) => setPriorityFilter(e.target.value as Priority)}
    >
      <option value="">All</option>
      <option value="urgent">Urgent</option>
      <option value="normal">Normal</option>
      <option value="low">Low</option>
    </select>

    <input
      className={styles.todo_filter_input}
      type="text"
      placeholder="Search by keyword"
      value={keyword}
      onChange={(e) => setKeyword(e.target.value)}
    />

    <select
      className={styles.todo_filter_select}
      value={sort}
      onChange={(e) => setSort(e.target.value as SortOption)}
    >
      <option value="createdAt">Created At</option>
      <option value="updatedAt">Updated At</option>
      <option value="priority">Priority</option>
    </select>

    <select
      className={styles.todo_filter_select}
      value={order}
      onChange={(e) => setOrder(e.target.value as OrderOption)}
    >
      <option value="desc">Descending</option>
      <option value="asc">Ascending</option>
    </select>
  </div>
);

export default Search;
