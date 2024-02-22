import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

function AppLayout() {
	return (
		<div className="flex">
			<Sidebar />
			<main className="w-5/6">
				<Header />
				<Outlet />
			</main>
		</div>
	);
}

export default AppLayout;
