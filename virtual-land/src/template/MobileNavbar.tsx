import React, { useEffect, useState } from 'react';
import logoutIcon from '../assets/svg/logout-icon.svg';
import menuIcon from '../assets/svg/menu-icon.svg';
import exitIcon from '../assets/svg/exit-icon.svg';
import toggleIcon from '../assets/svg/toggle-icon.svg';
import mapIcon from '../assets/svg/map-icon.svg';
import hammerIcon from '../assets/svg/hammer-icon.svg';
import cartIcon from '../assets/svg/cart-icon.svg';
import chartIcon from '../assets/svg/chart-icon.svg';
import accountImage from '../assets/svg/account-image.svg';
import editIcon from '../assets/svg/edit-icon.svg';
import { Link } from 'react-router-dom';

const MobileNavbar = () => {
	const [isAccount, setIsAccount] = useState<boolean>(true);
	const [isMap, setIsMap] = useState<boolean>(false);
	const [isLogin, setIsLogin] = useState<boolean>(false);

	useEffect(() => {
		// login, map, account
		if (window.location.pathname === '/registration/login') setIsLogin(true);
		else if (window.location.pathname === '/map') setIsMap(true);
		else if (window.location.pathname === '/account') setIsAccount(true);
	}, [window.location.pathname]);

	const openCloseMobileMenu = (action: string) => {
		const mobileMenu: HTMLElement | null =
			document.getElementById('mobile__menu');
		if (action === 'close') {
			mobileMenu!.style.display = 'none';
		} else {
			mobileMenu!.style.display = 'flex';
		}
	};

	return (
		<nav className='bg-lightPurple flex md:hidden absolute w-full h-10 gap-x-5 pr-5 z-10'>
			<section
				className='bg-darkBlue w-12 flex justify-center items-center cursor-pointer'
				onClick={() => {
					openCloseMobileMenu('open');
				}}>
				<img src={menuIcon} alt='menu icon' className='w-5 object-contain' />
			</section>

			{/* controlled section */}

			{isLogin ? (
				<section className='flex-1 flex items-center  gap-x-5'>
					<img src={logoutIcon} alt='log out icon' />
					<h2 className='uppercase text-white'>Login</h2>
				</section>
			) : isAccount ? (
				<section className='flex-1 flex items-center justify-between gap-x-5'>
					<div className='flex items-center gap-x-2'>
						<img
							src={accountImage}
							alt='user image'
							className='object-contain w-10'
						/>
						<h2 className='uppercase text-white text-xl'>profile</h2>
					</div>
					<button className=' uppercase flex items-center gap-x-1 sm:gap-x-3 bg-lightGreen py-1 px-2 sm:px-4 rounded-md text-white'>
						<img src={editIcon} alt='edit icon' /> edit profile
					</button>
				</section>
			) : isMap ? (
				<section className='flex-1 flex items-center  gap-x-5'>
					<img src={mapIcon} alt='map icon' />
					<h2 className='uppercase text-white'>map</h2>
				</section>
			) : (
				''
			)}

			<section className='absolute w-full hidden z-20' id='mobile__menu'>
				<section className=' min-h-screen w-[50%] bg-darkBlue flex flex-col gap-y-7 pt-10 pl-5 text-white '>
					<div className='flex items-center gap-x-3 cursor-pointer'>
						<img
							src={toggleIcon}
							alt=' toggle icon'
							className='w-fit cursor-pointer'
						/>
						<h2>Toggle Menu</h2>
					</div>

					<Link to='/maps' className='flex items-center gap-x-3 cursor-pointer'>
						<img
							src={mapIcon}
							alt=' map icon'
							className='w-fit cursor-pointer'
						/>
						<h2>Map</h2>
					</Link>

					<div className='flex items-center gap-x-3 cursor-pointer'>
						<img
							src={hammerIcon}
							alt=' hammer icon'
							className='w-fit cursor-pointer'
						/>
						<h2>My Offers</h2>
					</div>

					<div className='flex items-center gap-x-3 cursor-pointer'>
						<img
							src={cartIcon}
							alt=' cart icon'
							className='w-fit cursor-pointer'
						/>
						<h2>My Lands</h2>
					</div>

					<div className='flex items-center gap-x-3 cursor-pointer'>
						<img
							src={chartIcon}
							alt=' chart icon'
							className='w-fit cursor-pointer'
						/>
						<h2>Leader Board</h2>
					</div>
				</section>
				<section className='min-h-screen absolute w-[50%] top-0  right-0 bg-black bg-opacity-70 '>
					<img
						src={exitIcon}
						alt='exit icon'
						className='absolute right-5 top-5 cursor-pointer'
						onClick={() => {
							openCloseMobileMenu('close');
						}}
					/>
				</section>
			</section>
		</nav>
	);
};

export default MobileNavbar;
