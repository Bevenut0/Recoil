import { atom } from 'recoil';

export const todoListFilterState = atom({
  key: 'todoListFilterState',
  default: 'Todas', // Opções: 'Todas', 'Concluídas', 'Pendentes'
});