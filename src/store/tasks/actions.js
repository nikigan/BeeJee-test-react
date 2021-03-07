import tasksService, { createTask } from '../../services/tasks';
import { makeInvisible } from '../form/formSlice';
import { selectSorting, setPage, setSortingDirection, setSortingField, setTasks } from './taskSlice';

export const getAllTasks = () => async (dispatch, getState) => {
  const sorting = selectSorting(getState());

  const { tasks, total_task_count } = (await tasksService.getAllTasks(sorting)).data.message;

  dispatch(setTasks({ tasks, total_task_count }));
};

export const changePage = (page) => dispatch => {
  dispatch(setPage(page));
  dispatch(getAllTasks());
};


export const createNewTask = (formData) => async dispatch => {
  await createTask(formData);
  dispatch(getAllTasks());
  dispatch(makeInvisible());
};

export const changeSortingField = ({ sortField, sortDirection }) => dispatch => {
  dispatch(setSortingField(sortField));
  dispatch(setSortingDirection(sortDirection));
  dispatch(getAllTasks());
};