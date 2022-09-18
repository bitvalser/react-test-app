import { API_URL } from '@constants/config';

export const fetchTodo = () => {
  return fetch(`${API_URL}/todos`)
    .then((res) => res.json())
    .then((res) => res);
};

export const fetchDetails = (id: string) => {
  return fetch(`${API_URL}/todos/${id}`)
    .then((res) => res.json())
    .then((res) => res);
};
