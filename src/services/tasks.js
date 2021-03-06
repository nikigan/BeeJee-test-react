import axios from './base';

export const getAllTasks = ({ page = 1, sort_direction, sort_field }) => {
  return axios.get('/', {
    params: {
      page: page,
      sort_direction,
      sort_field
    }
  });
}

export const createTask = ({ username, email, text}) => {
  const formData = new FormData();
  formData.append('username', username);
  formData.append('email', email);
  formData.append('text', text);

  return axios.post('/create', formData);
}

const tasks = {
  getAllTasks,
  createTask
}

export default tasks;