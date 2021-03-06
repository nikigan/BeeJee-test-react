import React from 'react';
import './TaskItem.scss';

const TaskItem = ({ task }) => {
  const { id, username, email, text } = task;

  return (
    <div className="col-lg-4">
      <div className="task-item shadow-sm">
        <h4 className="task-item__id">Задача № {id}</h4>
        <h5 className="task-item__username">{username}</h5>
        <h6 className="task-item__email">{email}</h6>
        <p className="task-item__text">{text}</p>
      </div>
    </div>
  );
};

export default TaskItem;