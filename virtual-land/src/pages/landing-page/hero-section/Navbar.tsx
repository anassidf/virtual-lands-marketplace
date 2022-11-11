import { Link } from 'react-router-dom';
import menuIcon from '../../../assets/svg/menu-icon.svg';
import exitIcon from '../../../assets/svg/exit-icon.svg';
const Navbar = () => {
	// optemize
	const openCloseNavbar = (action: string) => {
		const element: HTMLElement | null = document.getElementById('sec');

		element!.style.display = 'flex';

		if (action === 'open') {
			element!.style.left = '0';
			element!.style.right = '0';
		} else {
			element!.style.left = '100%';
			element!.style.right = '-100%';
		}
	};

	return (
		<>
			{/* desktop navbar */}

			<nav className='hidden xl:flex justify-between items-center bg-gray h-[8rem] px-6 relative'>
				{/* website logo  */}
				<section className='text-white'>
					<h1 className='text-[1.875rem] font-[700]'>Buy Earth</h1>
				</section>
				{/* website news latest buyer */}
				<section className='text-white  absolute bottom-3 left-[40%] right-[40%]  flex justify-center'>
					<p className='text-center'>User123 just bought 32 tiles of land</p>
				</section>
				{/* website links */}
				<section className='text-white flex flex-col '>
					<div className='flex items-center space-x-3'>
						<Link
							to='/'
							className='border-solid border-2 border-white rounded-full px-2 py-1 '>
							About Us
						</Link>
						<Link
							to='/'
							className='border-solid border-2 border-white rounded-full px-2 py-1 '>
							Buy Land
						</Link>
						<Link
							to='/leaders'
							className='border-solid border-2 border-white rounded-full px-2 py-1 '>
							Leaderboard
						</Link>

						{/* seperator line */}

						<div className='h-9 w-[.1rem] bg-zinc-700 mr-3'></div>
						<Link
							to='/registration/login'
							className='bg-darkBlue rounded-full px-2 py-2  '>
							Log in / Sign up
						</Link>
					</div>
					<div className='mt-3 flex justify-end'>
						<Link
							to='/'
							className='border-solid border-2 border-white rounded-full px-5 py-1  '>
							View all
						</Link>
					</div>
				</section>
			</nav>

			{/* mobilenavbar */}

			<nav className='xl:hidden flex justify-between items-center bg-gray h-[8rem] px-6 '>
				<section className='w-full text-white flex justify-between  items-center'>
					<h1 className='text-[1.2rem] sm:text-[1.8rem] xl:text-[1.875rem] font-[700]'>
						Buy Earth
					</h1>

					{/* menu icon */}

					<img
						src={menuIcon}
						alt='menu icon'
						className='cursor-pointer w-5 sm:w-7'
						onClick={() => openCloseNavbar('open')}
					/>
				</section>

				{/* website links */}

				<section
					id='sec'
					className='hidden bg-gray h-screen fixed top-0 left-[100%] right-[-100%]  z-20  justify-center items-center transition-all ease-in-out delay-150'>
					{/* website news latest buyer */}

					{/* website links */}
					<section className=' text-white flex flex-col items-center space-y-8'>
						<div className='flex flex-col items-center space-y-5'>
							<Link
								to='/'
								className='border-solid border-2 border-white rounded-full px-2 py-1 '>
								About Us
							</Link>
							<Link
								to='/'
								className='border-solid border-2 border-white rounded-full px-2 py-1  '>
								Buy Land
							</Link>
							<Link
								to='/leaders'
								className='border-solid border-2 border-white rounded-full px-2 py-1  '>
								Leaderboard
							</Link>
						</div>
						<div className='space-x-5'>
							<Link
								to='/'
								className='border-solid border-2 border-white rounded-full px-5 py-1 '>
								View all
							</Link>
							<Link
								to='/registration/login'
								className='bg-darkBlue rounded-full px-2 py-2  '>
								Log in / Sign up
							</Link>
						</div>

						<section className='text-white text-center'>
							<p className=''>User123 just bought 32 tiles of land</p>
						</section>
					</section>

					<img
						src={exitIcon}
						alt='exit icon'
						className='absolute top-10 left-9 cursor-pointer'
						onClick={() => openCloseNavbar('close')}
					/>
				</section>
			</nav>
		</>
	);
};

export default Navbar;
