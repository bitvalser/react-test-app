import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDataAction } from 'redux/actions/main';
import { mainList, mainLoading } from 'redux/selectors/main';
import { useNavigate, generatePath } from 'react-router-dom';
import { AppRoutes } from 'constants/app-routes';

const Main: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const list = useSelector(mainList);
  const isListLoading = useSelector(mainLoading);

  useEffect(() => {
    dispatch(getDataAction());
  }, [dispatch]);

  const handleCheckDetails = (id: string) => () => {
    navigate(generatePath(AppRoutes.Details, { id }));
  };

  return (
    <div>
      <div>{isListLoading ? 'loading...' : 'Main'}</div>
      {list?.map(({ id, title }) => (
        <div key={id}>
          <h2>{title}</h2>
          <button onClick={handleCheckDetails(id)}>Check details</button>
        </div>
      ))}
    </div>
  );
};

export default Main;
