import React from 'react';
import { useRecoilState } from 'recoil';
import { todoListFilterState } from '../atoms/todoFilterAtom';

export function TodoListFilters() {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  return (
    <div style={{ marginBottom: '15px' }}>
      <span>Filtrar: </span>
      <button
        onClick={() => setFilter('Todas')}
        style={{ fontWeight: filter === 'Todas' ? 'bold' : 'normal' }}
      >
        Todas
      </button>
      <button
        onClick={() => setFilter('Concluídas')}
        style={{ marginLeft: '5px', fontWeight: filter === 'Concluídas' ? 'bold' : 'normal' }}
      >
        Concluídas
      </button>
      <button
        onClick={() => setFilter('Pendentes')}
        style={{ marginLeft: '5px', fontWeight: filter === 'Pendentes' ? 'bold' : 'normal' }}
      >
        Pendentes
      </button>
    </div>
  );
}