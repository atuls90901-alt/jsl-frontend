import Sidebar from "../shared/Sidebar";
import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100">

      <Sidebar />

      <div
        className="

        flex-1

        w-full

        p-4 md:p-6

        mt-24 md:mt-0

        overflow-x-hidden

        "
      >

        <Outlet />

      </div>

    </div>
  );
}

export default Dashboard;