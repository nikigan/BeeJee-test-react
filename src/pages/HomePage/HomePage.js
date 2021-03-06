import { Container } from 'react-bootstrap';
import ButtonsBar from '../../components/ButtonsBar/ButtonsBar';
import TasksList from '../../components/TasksList/TasksList';
import CreateTaskModal from '../../components/CreateTaskModal/CreateTaskModal';
import ReactPaginate from 'react-paginate';
import React from 'react';
import './HomePage.scss';
import { useDispatch, useSelector } from 'react-redux';
import { changePage, selectPagesCount } from '../../store/tasks/taskSlice';

const HomePage = () => {
  const dispatch = useDispatch();

  const pageCount = useSelector(selectPagesCount);

  return (
    <>
      <Container>
        <ButtonsBar/>
        <TasksList/>
        {pageCount > 1 &&
        <ReactPaginate
          previousLabel="Назад"
          nextLabel="Вперед"
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={pageCount}
          marginPagesDisplayed={1}
          pageRangeDisplayed={3}
          onPageChange={({ selected }) => dispatch(changePage(selected + 1))}
          containerClassName="pagination"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          activeClassName={'active'}
        />
        }
      </Container>
      <CreateTaskModal/>
    </>
  );
};

export default HomePage;