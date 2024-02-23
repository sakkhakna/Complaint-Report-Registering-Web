import { Outlet } from "react-router-dom";
import Header from "./Header";
import BottomNavigation from "./BottomNavigation";
import Logo from "../assets/Logo.png";

function AppLayout() {
	return (
		<div className="flex flex-col xl:flex-row">
			<aside className="w-1/6 fixed h-screen top-0 left-0 bottom-0 ">
				<div className="w-[230px] p-4 md:p-10 h-screen hidden xl:flex flex-col gap-10">
					<img src={Logo} alt="Logo" className="w-28" />
					<dix className="flex flex-col text-lg font-bold">
						<a>Home</a>
						<a>Report</a>
					</dix>
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
