import React from 'react';
import { useRecoilState } from 'recoil';
import { todoListState } from './atoms/todoListAtom';

export function TodoItem({ item }) {
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const toggleItemCompletion = () => {
    const updatedList = todoList.map((todo) =>
      todo.id === item.id ? { ...todo, isComplete: !todo.isComplete } : todo
    );
    setTodoList(updatedList);
  };

  const deleteItem = () => {
    const updatedList = todoList.filter((todo) => todo.id !== item.id);
    setTodoList(updatedList);
  };

  return (
    <li style={{ marginBottom: '8px' }}>
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={toggleItemCompletion}
      />
      <span
        style={{
          marginLeft: '8px',
          textDecoration: item.isComplete ? 'line-through' : 'none',
        }}
      >
        {item.text}
      </span>
      <button onClick={deleteItem} style={{ marginLeft: '12px' }}>
        Remover
      </button>
    </li>
  );
}