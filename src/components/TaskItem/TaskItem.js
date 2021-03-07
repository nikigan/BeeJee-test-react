import React from 'react';
import './TaskItem.scss';
import checked from '../../assets/icons/checked.svg';
import ClampedText from '../ClampedText/ClampedText';

const TaskItem = ({ task }) => {
  const { id, username, email, text, status } = task;

  const isDone = status === "1" || status === "11";

  return (
    <div className="col-lg-4 mb-5">
      <div className="task-item shadow-sm">
        <h4 className="task-item__id">Задача № {id}</h4>
        <h5 className="task-item__username">{username}</h5>
        <h6 className="task-item__email">{email}</h6>
        <ClampedText className="task-item__text" text={text}/>
        { isDone && <img className="task-item__done-mark" src={checked} alt="Выполнено"/> }
      </div>
    </div>
  );
};

export default TaskItem;