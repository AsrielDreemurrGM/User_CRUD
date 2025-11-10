import { Route, Routes } from 'react-router-dom';

import RegisterUserFormPage from './pages/RegisterUserForm/RegisterUserFormPage';
import AllUsersListPage from './pages/AllUsersListPage/AllUsersListPage';
import EditUserFormPage from './pages/EditUserForm/EditUserFormPage';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<RegisterUserFormPage />} />
      <Route path="/AllUsersList" element={<AllUsersListPage />} />
      <Route path="/EditUser/:userId" element={<EditUserFormPage />} />
    </Routes>
  );
};

export default AllRoutes;
