export const fetchData = () => {
  return fetch('https://jsonplaceholder.typicode.com/todos')
    .then((res) => res.json())
    .then((res) => res);
};

export const fetchDetails = (id: string) => {
  return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then((res) => res.json())
    .then((res) => res);
};
