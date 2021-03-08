import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { createNewTask, editTask } from '../../store/tasks/actions';
import { useHistory } from 'react-router-dom';

const CreateTaskForm = () => {
  const {
    username = '',
    email = '',
    text = '',
    id = null,
    status
  } = useSelector(state => state.form.currentTask) || {};
  const edit = useSelector(state => state.form.edit);
  const dispatch = useDispatch();
  const history = useHistory();

  const formHandler = (data) => {
    if (edit) {
      dispatch(editTask({ data, id, oldText: text, status }, history));
    } else {
      dispatch(createNewTask(data));
    }
  };

  const done = status === 10 || status === 11 || false;


  const { register, handleSubmit, errors } = useForm({
    defaultValues: {
      username,
      email,
      text,
      status: done
    },
  });

  return (
    <Form onSubmit={handleSubmit(formHandler)}>
      <Form.Group controlId="username">
        <Form.Label>Имя пользователя:</Form.Label>
        <Form.Control type="text" name='username' disabled={edit} placeholder="Введите имя пользователя" ref={register({
          required: true
        })}/>
        {errors.username && 'Необходимо ввести имя пользователя'}
      </Form.Group>
      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name='email' disabled={edit} placeholder="Введите адрес электронной почты"
                      ref={register({
                        required: true,
                        pattern: /^\S+@\S+$/i
                      })}/>
        {errors.email && 'Необходимо ввести корректный адрес электронной почты'}
      </Form.Group>
      <Form.Group controlId="text">
        <Form.Label>Текст</Form.Label>
        <Form.Control as="textarea" rows={5} name='text' placeholder="Текст задачи..." ref={register({
          required: true
        })}/>
        {errors.email && 'Необходимо ввести текст задачи'}
      </Form.Group>
      {edit && <Form.Group>
        <Form.Label>Статус</Form.Label>
        <Form.Check
          type="switch"
          id="status"
          label="Выполнено"
          name="status"
          ref={register}
        />
      </Form.Group>}
      <Button variant="primary" type="submit" className="d-block ml-auto">
        Сохранить
      </Button>
    </Form>
  );
};

export default CreateTaskForm;