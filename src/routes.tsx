import { Route, Routes } from 'react-router-dom';

import RegisterFormPage from './pages/RegisterForm/RegisterFormPage';
import AllUsersListPage from './pages/AllUsersListPage/AllUsersListPage';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<RegisterFormPage />} />
      <Route path="/AllUsersList" element={<AllUsersListPage />} />
    </Routes>
  );
};

export default AllRoutes;
