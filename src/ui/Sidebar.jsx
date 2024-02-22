import Logo from "../assets/Logo.png";

function Sidebar() {
	return (
		<aside className="w-1/6 h-screen p-4 md:p-10 flex justify-center">
			<div className="">
				<img src={Logo} alt="Logo" className="w-28" />
				<dix className="flex flex-col text-lg font-bold mt-2">
					<a>Home</a>
					<a>Report</a>
				</dix>
			</div>
		</aside>
	);
}

export default Sidebar;
