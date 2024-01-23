import { Outlet } from "react-router-dom";
import Header from "./Header";

function AppLayout() {
  return (
    <div className="flex">
      <aside className="w-1/6 bg-green-600 h-screen p-4 md:p-10">Aside</aside>
      <main className="w-5/6">
        <Header />
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
