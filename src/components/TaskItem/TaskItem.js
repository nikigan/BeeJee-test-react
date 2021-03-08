import React from 'react';
import './TaskItem.scss';
import checkedIcon from '../../assets/icons/checked.svg';
import editedIcon from '../../assets/icons/edit.svg';
import ClampedText from '../ClampedText/ClampedText';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { makeVisible } from '../../store/form/formSlice';

const TaskItem = ({ task }) => {
  const { id, username, email, text, status } = task;
  const dispatch = useDispatch();

  const loggedIn = useSelector(state => state.auth.loggedIn);

  const isDone = status === 10 || status === 11 || false;
  const isEdited = status === 1 || status === 11 || false;

  return (
    <div className="col-lg-4 mb-5">
      <div className="task-item shadow-sm">
        <h4 className="task-item__id">Задача № {id}</h4>
        <h5 className="task-item__username">{username}</h5>
        <h6 className="task-item__email">{email}</h6>
        <ClampedText className="task-item__text" text={text}/>
        {isDone && <img className="task-item__done-mark" src={checkedIcon} alt="Выполнено"/>}
        {isEdited && <img className="task-item__edited-mark" src={editedIcon} alt="Отредактировано"/>}
        {loggedIn && <Button onClick={() => dispatch(makeVisible(task))}>Редактировать</Button>}
      </div>
    </div>
  );
};

export default TaskItem;