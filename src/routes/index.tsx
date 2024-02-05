import { Route, Routes } from 'react-router-dom';
import paths from '@/routes/paths';
import Landing from '@/pages/Landing';

const AllRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path={paths.landing} element={<Landing />} />
    </Routes>
  );
};

export default AllRoutes;
