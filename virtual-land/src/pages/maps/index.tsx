import React from 'react';
import NavigationSideBar from '../../template/NavigationSideBar';
import MapSection from './MapSection';

const Maps = () => {
	return (
		<section className='flex min-h-screen'>
			<NavigationSideBar />
			<MapSection />
		</section>
	);
};

export default Maps;
