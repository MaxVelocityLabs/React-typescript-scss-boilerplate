import { Routes, Route } from 'react-router-dom';

import { HomePageContainer } from '@app/pages/HomePage/HomePage.container';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePageContainer />} />
      {/* Add more routes here as needed */}
      {/* <Route path="/dashboard" element={<DashboardComponent />} /> */}
      {/* <Route path="/profile" element={<ProfileComponent />} /> */}
    </Routes>
  );
};
