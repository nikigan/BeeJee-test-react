import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { createNewTask } from '../../store/tasks/actions';

const CreateTaskForm = ({ username, email, text }) => {
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();

  return (
    <Form onSubmit={handleSubmit(data => dispatch(createNewTask(data)))}>
      <Form.Group controlId="username">
        <Form.Label>Имя пользователя:</Form.Label>
        <Form.Control type="text" name='username' placeholder="Введите имя пользователя" ref={register({
          required: true
        })}/>
        {errors.username && 'Необходимо ввести имя пользователя'}
      </Form.Group>
      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name='email' placeholder="Введите адрес электронной почты" ref={register({
          required: true,
          pattern: /^\S+@\S+$/i
        })}/>
        {errors.email && 'Необходимо ввести корректный адрес электронной почты'}
      </Form.Group>
      <Form.Group controlId="text">
        <Form.Label>Текст</Form.Label>
        <Form.Control as="textarea" name='text' placeholder="Текст задачи..." ref={register({
          required: true,
          minLength: 10
        })}/>
        {errors.email && 'Необходимо ввести текст задачи'}
      </Form.Group>
      <Button variant="primary" type="submit" className="d-block ml-auto">
        Сохранить
      </Button>
    </Form>
  );
};

export default CreateTaskForm;