import { Outlet } from 'react-router-dom';
import Nav from './Nav';
import AppTitle from './AppTitle';

const MainLayout = () => {
  return (
    <div>
      <Nav />
      <AppTitle />

      {/* <Outlet> is a fallthrough to render the appropriate child 
            component for the current route */}
      <Outlet />
    </div>
  );
};

export default MainLayout;
