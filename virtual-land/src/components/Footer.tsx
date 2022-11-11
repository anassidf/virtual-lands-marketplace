import React from 'react';
import twitter from '../assets/svg/w-twitter.svg';
import facebook from '../assets/svg/w-facebook.svg';
import instegram from '../assets/svg/w-instegram.svg';
import linkedin from '../assets/svg/w-linkedin.svg';
import youtube from '../assets/svg/w-youtube.svg';
import reddit from '../assets/svg/w-reddit.svg';
import discord from '../assets/svg/w-discord.svg';
import LandCard from './LandCard';
const Footer = () => {
	return (
		<section className='min-h-96 bg-gray text-white flex justify-center items-center p-10 '>
			{/* content container */}
			<section className='space-y-20'>
				<section className='flex flex-col items-center lg:items-start  lg:flex-row  justify-between gap-x-32 gap-y-10'>
					{/* company  */}
					<div className='space-y-2'>
						<h2 className='text-2xl mb-5'>Company</h2>
						<p>About Buy Earth</p>
						<p>Our Team</p>
						<p>Updates</p>
						<p>News</p>
					</div>
					{/* account  */}
					<div className='space-y-2'>
						<h2 className='text-2xl mb-5'>Account</h2>
						<p>Log in / Sign up</p>
						<p>Profile</p>
						<p>Settings</p>
					</div>
					{/* support  */}
					<div className='space-y-2'>
						<h2 className='text-2xl mb-5'>Support</h2>
						<p>Support</p>
						<p>System Status</p>
					</div>
					{/* social media  */}
					<div className=''>
						<h2 className='text-2xl mb-5'> Social</h2>
						<div className='flex flex-wrap gap-6 w-60'>
							<img src={twitter} alt='twitter icon' />
							<img src={facebook} alt='facebook icon' />
							<img src={instegram} alt='instegram icon' />
							<img src={linkedin} alt='linkedin icon' />
							<img src={youtube} alt='youtube icon' />
							<img src={reddit} alt='reddit icon' />
							<img src={discord} alt='discord icon' />
						</div>
					</div>
				</section>
				{/* footer cards section */}
				<section className='flex flex-col lg:flex-row gap-x-5 gap-y-10'>
					<LandCard
						title='Buy Earth'
						location='Level 22, 307 Queen Street, Brisbane, QLD, Australia, 4000'
					/>
					<LandCard
						title='Buy Earth'
						location='First Floor, 140 Brompton Road, London, United Kingdom, SW3 1HY'
					/>
				</section>
				{/* copyright section */}
				<section className='flex flex-col lg:flex-row items-center justify-between gap-y-10 '>
					<div>
						<h2>
							&copy; 2022
							<span className='relative'>
								Buy Earth{' '}
								<span className='absolute top-[-6px] left-[94%]'>&reg;</span>
							</span>
						</h2>
					</div>

					<section className='flex gap-x-3 text-zinc-400 text-sm '>
						<h2 className='border-solid border-r-2 border-zinc-600 px-2 py-0.22 cursor-pointer'>
							Imprint
						</h2>
						<h2 className='border-solid border-r-2 border-zinc-600 px-2 py-0.22 cursor-pointer'>
							Terms & Conditions
						</h2>
						<h2 className='cursor-pointer'>Privacy Policy</h2>
					</section>
				</section>
			</section>
		</section>
	);
};

export default Footer;
