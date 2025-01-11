import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function AdminLayout() {
  return (
    <>
      <Navbar />
      <div className="container py-5">
        <Outlet />
      </div>
    </>
  );
}

export default AdminLayout;
