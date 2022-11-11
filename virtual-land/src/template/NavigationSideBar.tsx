import React, { useEffect, useState } from 'react';
import toggleIcon from '../assets/svg/toggle-icon.svg';
import mapIcon from '../assets/svg/map-icon.svg';
import hammerIcon from '../assets/svg/hammer-icon.svg';
import cartIcon from '../assets/svg/cart-icon.svg';
import payIcon from '../assets/svg/pay-card-icon.svg';
import chartIcon from '../assets/svg/chart-icon.svg';
import planeIcon from '../assets/svg/plane-icon.svg';
import walletIcon from '../assets/svg/wallet-icon.svg';
import login from '../assets/svg/logout-icon.svg';
import accountIcon from '../assets/svg/account-image.svg';
import bellIcon from '../assets/svg/bell-icon.svg';
import MobileNavbar from './MobileNavbar';
import { Link } from 'react-router-dom';
import { gun, userOperation } from '../configurations/gun/gun';
const NavigationSideBar = () => {
	const [loggedIn, setloggedIn] = useState<boolean>(false);
	const [publickKey, setPublickKey] = useState<string>('');
	useEffect(() => {
		if (userOperation.is) {
			setloggedIn(true);
			setPublickKey(userOperation.is.pub);
		} else {
			setloggedIn(false);
		}
	}, []);
	return (
		<>
			<aside className='bg-darkBlue w-10 pt-9 pb-9 hidden md:flex flex-col justify-between items-center'>
				{/* general icons */}
				<section className='flex flex-col gap-y-7 items-center'>
					<img
						src={toggleIcon}
						alt=' toggle icon'
						className='w-fit cursor-pointer'
					/>
					<Link to='/maps'>
						<img
							src={mapIcon}
							alt=' map icon'
							className='w-fit cursor-pointer'
						/>
					</Link>
					<img
						src={hammerIcon}
						alt=' hammer icon'
						className='w-fit cursor-pointer'
					/>
					<img
						src={cartIcon}
						alt=' cart icon'
						className='w-fit cursor-pointer'
					/>
					<img src={payIcon} alt=' pay icon' className='w-fit cursor-pointer' />
					<Link to='/leaders'>
						<img
							src={chartIcon}
							alt=' chart icon'
							className='w-fit cursor-pointer'
						/>
					</Link>

					<img
						src={planeIcon}
						alt=' plane icon'
						className='w-fit cursor-pointer'
					/>
					{loggedIn ? (
						<img
							src={walletIcon}
							alt=' wallet icon'
							className='w-fit cursor-pointer'
						/>
					) : (
						''
					)}
				</section>

				{/* bottom section */}
				<section className='flex flex-col items-center gap-y-5 '>
					{loggedIn ? (
						<>
							<Link to='/registration/login'>
								<img
									src={bellIcon}
									alt=' bell icon'
									className='w-fit cursor-pointer'
								/>
							</Link>
							<Link to={`/account/account/${publickKey}`}>
								<img
									src={accountIcon}
									alt=' account icon'
									className='w-7 cursor-pointer'
								/>
							</Link>
						</>
					) : (
						''
					)}

					<Link to='/registration/login'>
						<img
							src={login}
							alt=' login icon'
							className='w-fit cursor-pointer'
						/>
					</Link>
				</section>
			</aside>

			{/* ----------------------------navbar for mobile------------------------------ */}

			<MobileNavbar />
		</>
	);
};

export default NavigationSideBar;
