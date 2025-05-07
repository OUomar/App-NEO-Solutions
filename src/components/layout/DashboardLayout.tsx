import { Outlet } from 'react-router';

const DashboardLayout = () => {
  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
