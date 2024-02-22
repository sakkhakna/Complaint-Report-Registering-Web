import { Outlet } from "react-router-dom";
import Header from "./Header";
import BottomNavigation from "./BottomNavigation";

function AppLayout() {
  return (
    <div className="flex flex-col xl:flex-row">
      <aside className="fixed h-screen top-0 left-0 bottom-0 bg-green-600">
        <div className="w-[230px] p-4 md:p-10 h-screen hidden xl:flex flex-col gap-10">
          Aside
        </div>
      </aside>
      <main className="w-full xl:ml-[230px]">
        <Header />
        <Outlet />
      </main>
      <BottomNavigation />
    </div>
  );
}

export default AppLayout;
