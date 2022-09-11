import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDetailsAction } from 'redux/actions/main';
import { mainLoading, selectDetail } from 'redux/selectors/main';

const Details: FC = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const detail = useSelector(selectDetail);
  const loading = useSelector(mainLoading);

  useEffect(() => {
    dispatch(getDetailsAction(params.id));
  }, [dispatch, params.id]);

  return (
    <div>
      <div>{loading ? 'Loading...' : 'Details'}</div>
      {!loading && detail && (
        <div>
          <h1>{detail.title}</h1>
        </div>
      )}
    </div>
  );
};

export default Details;
