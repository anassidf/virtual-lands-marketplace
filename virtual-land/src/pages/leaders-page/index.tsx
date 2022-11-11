import React from 'react';
import NavigationSideBar from '../../template/NavigationSideBar';
import LeadersBoard from './LeadersBoard';
const Leaders = () => {
	return (
		<section className='flex'>
			<NavigationSideBar />
			<LeadersBoard />
		</section>
	);
};

export default Leaders;
