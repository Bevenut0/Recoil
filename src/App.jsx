import React from 'react';
import { useRecoilValue } from 'recoil';
import { filteredTodoListState } from './selectors/filteredTodoListSelector';
import { TodoItemCreator } from './components/TodoItemCreator';
import { TodoListFilters } from './components/TodoListFilters';
import { TodoItem } from './components/TodoItem';

export default function App() {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '400px' }}>
      <h2>Lista de Tarefas (Recoil)</h2>
      <TodoItemCreator />
      <TodoListFilters />

      <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
        {todoList.map((todoItem) => (
          <TodoItem key={todoItem.id} item={todoItem} />
        ))}
      </ul>
    </div>
  );
}