import { selector } from 'recoil';
import { todoListState } from '../atoms/todoListAtom';
import { todoListFilterState } from '../atoms/todoFilterAtom';
export const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case 'Concluídas':
        return list.filter((item) => item.isComplete);
      case 'Pendentes':
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
});