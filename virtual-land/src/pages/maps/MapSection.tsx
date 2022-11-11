import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import earthIcon from '../../assets/svg/earth-icon.svg';
import eyeIcon from '../../assets/svg/eye-icon.svg';
import downloadIcon from '../../assets/svg/download-icon.svg';
import landIcon from '../../assets/svg/land-icon.svg';
const MapSection = () => {
	const { isLoaded } = useLoadScript({
		googleMapsApiKey: 'AIzaSyCSrERZ53qa1WNBBN8tsdpTXWSQbvAQIUE',
	});
	if (!isLoaded) {
		return <h2>Loading...</h2>;
	} else return <Map />;
};

const collapse = (action: string) => {
	if (action === 'close') {
		// document.getElementById('lands__details')!.style.left = '-100%';
		document.getElementById('lands__details')!.style.display = 'none';

		document.getElementById('collapsed__mapMenu')!.style.display = 'flex';
	} else {
		// document.getElementById('lands__details')!.style.left = '2.25rem';
		document.getElementById('lands__details')!.style.display = 'block';
		document.getElementById('collapsed__mapMenu')!.style.display = 'none';
	}
};
const Map = () => (
	<>
		<section className='z-10'>
			<section
				className='absolute left-0 top-10 right-0 md:left-9 md:right-auto md:top-0 bg-darkBlue bg-opacity-80 min-w-96 min-h-screen pt-7 px-5 '
				id='lands__details'>
				{/* search section */}
				<section className='flex  items-center justify-center gap-x-3'>
					<input type='text' className='bg-white p-2 rounded-md outline-none' />
					<img
						src={earthIcon}
						alt='earth icon'
						className='bg-white p-2 rounded-md cursor-pointer'
					/>
					<img
						src={eyeIcon}
						alt='discover location icon'
						className='bg-white p-2 rounded-md cursor-pointer'
					/>
					<img
						src={downloadIcon}
						alt='download location icon'
						className='cursor-pointer'
						onClick={() => {
							collapse('close');
						}}
					/>
				</section>

				{/* lands info section */}

				<section className='flex items-center justify-center gap-x-3 text-white mt-5 '>
					<img src={landIcon} alt='land icon' />
					<h2 className='uppercase '>
						tiles selected: <span> -/ 1000 </span>
					</h2>
					<h4 className='cursor-pointer font-light'>clear selection</h4>
				</section>
				{/* tiles selected info */}
				<section className='flex gap-x-3 text-white mt-5 bg-darkBlue py-3 rounded-md md:w-96'>
					<h2 className=' ml-3'>No tiles selected</h2>
				</section>
				{/* payment section */}
				<section className='flex flex-col gap-y-3 text-white mt-5 bg-darkBlue py-3 rounded-md text-sm md:w-96'>
					<h2 className=' mx-3 uppercase font-bold'>
						you can pay with debit card
					</h2>
					<p className=' mx-3 '>
						pay for your land with your credit card, we will save it under your
						account
					</p>
				</section>

				{/* need help section */}

				<section className='flex flex-col gap-y-6 text-white mt-5 bg-darkBlue py-3 rounded-md text-sm md:w-96'>
					<h2 className=' mx-3 uppercase font-bold'>select some tiles</h2>
					<p className=' mx-3 '>Need some help?</p>
					<button className='uppercase '>watch tutorial</button>
				</section>
			</section>

			{/* collapsed version */}

			<section
				className='hidden flex-col items-center gap-y-5 absolute left-0 top-10  md:left-9 md:right-auto md:top-0 bg-darkBlue bg-opacity-80 z-10 min-w-32 min-h-screen pt-7 px-5'
				id='collapsed__mapMenu'>
				<img
					src={downloadIcon}
					alt='download location icon'
					className='cursor-pointer rotate-180'
					onClick={() => {
						collapse('open');
					}}
				/>
				<img
					src={earthIcon}
					alt='earth icon'
					className='bg-white p-2 rounded-md cursor-pointer'
				/>
				<img
					src={eyeIcon}
					alt='discover location icon'
					className='bg-white p-2 rounded-md cursor-pointer '
				/>
				<img src={landIcon} alt='land icon' className=' mb-20' />
			</section>
		</section>
		<GoogleMap
			zoom={10}
			center={{ lat: 32.556957, lng: 35.847908 }}
			mapContainerStyle={{ width: '100%', height: '100vh' }}></GoogleMap>
	</>
);

export default MapSection;
