function Header() {
	return (
		<header className="p-6 px-10 flex justify-between items-center">
			<h1 className="font-bold text-2xl">Hello User!</h1>
			<div className="flex items-center gap-2">
				<div className="bg-[#D9D9D9] w-11 h-11 rounded-full"></div>
				<h3>User</h3>
			</div>
		</header>
	);
}

export default Header;
