import React from 'react';
import './ButtonsBar.scss'
import { Button, Col, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { makeVisible } from '../../store/form/formSlice';

const ButtonsBar = () => {
  const dispatch = useDispatch();

    return (
      <Row className="py-3">
          <Col lg={{
              span: 4,
              offset: 8
          }}>
              <Button variant="primary" onClick={() => dispatch(makeVisible())}>Добавить задачу</Button>
          </Col>
      </Row>
    )
}

export default ButtonsBar;
