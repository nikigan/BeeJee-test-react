import { useDispatch, useSelector } from 'react-redux';
import { selectTasks } from '../../store/tasks/taskSlice';
import React, { useEffect } from 'react';
import TaskItem from '../TaskItem/TaskItem';
import './TasksList.scss'
import { getAllTasks } from '../../store/tasks/actions';

const TasksList = () => {

  const tasks = useSelector(selectTasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTasks());
  }, [dispatch]);

  const renderedTasks = tasks.length > 0 ?
    (tasks.map(task => (
      <TaskItem key={task.id} task={task}/>
    ))) : (<div>Задачи не найдены</div>);

  return (
    <div className="row tasks-row">
      { renderedTasks }
    </div>
  )
};

export default TasksList;