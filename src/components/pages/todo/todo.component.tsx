import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDataAction } from '@redux/actions/todo';
import { todoList, mainLoading, todoListKeys } from '@redux/selectors/todo';
import { useNavigate, generatePath } from 'react-router-dom';
import { AppRoutes } from '@constants/app-routes';
import * as Styled from './todo.styles';

const Todo: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const list = useSelector(todoList);
  const listKeys = useSelector(todoListKeys);
  const isListLoading = useSelector(mainLoading);

  useEffect(() => {
    dispatch(getDataAction());
  }, [dispatch]);

  const handleCheckDetails = (id: string) => () => {
    navigate(generatePath(AppRoutes.Details, { id }));
  };

  return (
    <Styled.Container>
      <div>{isListLoading ? 'loading...' : 'Main'}</div>
      {listKeys?.map((key) => {
        const { title } = list[key];
        return (
          <div key={key}>
            <h2>{title}</h2>
            <button onClick={handleCheckDetails(key)}>Check details</button>
          </div>
        );
      })}
    </Styled.Container>
  );
};

export default Todo;
