import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from '../atoms/todoListAtom';

export function TodoItemCreator() {
  const [inputValue, setInputValue] = useState('');
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    if (!inputValue.trim()) return;

    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: Date.now(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue('');
  };

  return (
    <div style={{ marginBottom: '15px' }}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Digite uma nova tarefa..."
      />
      <button onClick={addItem} style={{ marginLeft: '8px' }}>
        Adicionar
      </button>
    </div>
  );
}