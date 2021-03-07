import React from 'react';
import './ButtonsBar.scss'
import { Button, Col, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { makeVisible } from '../../store/form/formSlice';
import SortButton from '../SortButton/SortButton';

const ButtonsBar = () => {
  const dispatch = useDispatch();

    return (
      <Row className="py-3">
        <Col lg={8}>
          <SortButton title="ID" fieldName="id"/>
          <SortButton title="Имя пользователя" fieldName="username"/>
          <SortButton title="E-mail" fieldName="email"/>
          <SortButton title="Статус" fieldName="status"/>
        </Col>
          <Col lg={4}>
              <Button variant="primary" onClick={() => dispatch(makeVisible())}>Добавить задачу</Button>
          </Col>
      </Row>
    )
}

export default ButtonsBar;
