import React from 'react';
import NavigationSideBar from '../../template/NavigationSideBar';
import AccountSection from './AccountSection';
import { Routes, Route } from 'react-router-dom';
import LandsSection from './LandsSection';
import OffersSection from './OffersSection';
const Account = () => {
	return (
		<section className='flex'>
			<NavigationSideBar />

			<Routes>
				<Route path='account/:pub' element={<AccountSection />} />
				<Route path='offers/:pub' element={<OffersSection />} />
				<Route path='my_lands/:pub' element={<LandsSection />} />
			</Routes>
		</section>
	);
};

export default Account;
