import { Navigate, Outlet } from 'react-router-dom'
import useToken from './useToken';

const PrivateRoutes = () => {

  const { token } = useToken();
  const auth = token != null;

  return (
    auth ? <Outlet />
    : <Navigate to={'/login'} />
  );
};

export default PrivateRoutes