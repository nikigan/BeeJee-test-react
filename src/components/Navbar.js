import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { adminLogout } from '../store/auth/actions';

const CustomNavbar = () => {
  const loggedIn = useSelector(state => state.auth.loggedIn);
  const dispatch = useDispatch();

  const button = loggedIn ?
    <Nav.Link onClick={() => dispatch(adminLogout())}>Выйти</Nav.Link> :
    <Nav.Link as={Link} to="/login">Войти</Nav.Link>;

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">BeeJee Test React</Navbar.Brand>
        <Nav className="ml-auto">
          {button}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;