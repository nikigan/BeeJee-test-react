import { createSlice } from '@reduxjs/toolkit';
import tasksService, { createTask } from '../../services/tasks';
import { makeInvisible } from '../form/formSlice';

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    items: [],
    loading: false,
    page: 0,
    tasksCount: 0,
    sort_field: "id",
    sort_direction: "desc"
  },
  reducers: {
    setTasks: (state, action) => {
      state.items = action.payload.tasks;
      state.tasksCount = action.payload.total_task_count;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    }
  }
});

export const { setTasks, setPage } = tasksSlice.actions;

export const getAllTasks = () => async (dispatch, getState) => {
  const sorting = selectSorting(getState());

  const {tasks, total_task_count} = (await tasksService.getAllTasks(sorting)).data.message;

  dispatch(setTasks({tasks, total_task_count}));
}

export const changePage = (page) => dispatch => {
  dispatch(setPage(page));
  dispatch(getAllTasks());
}

export const selectPagesCount = state => state.tasks.tasksCount / 3;

export const selectTasks = state => state.tasks.items;

export const selectSorting = state => {
  const { sort_field, sort_direction, page} = state.tasks;
  return { sort_field, sort_direction, page};
}

export const createNewTask = (formData) => async dispatch => {
  await createTask(formData);
  dispatch(getAllTasks());
  dispatch(makeInvisible());
}

export default tasksSlice.reducer;