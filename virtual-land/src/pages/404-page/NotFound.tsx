import React from 'react';
import NavigationSideBar from '../../template/NavigationSideBar';

const NotFound = () => {
	return (
		<section className=' h-screen bg-earthBackground object-contain bg-center bg-cover flex-1  flex  justify-center gap-y-10  '>
			<NavigationSideBar />

			<h2 className='flex-1 text-green-400 font-bold text-4xl flex justify-center items-center'>
				404 Error Page Not Found
			</h2>
		</section>
	);
};

export default NotFound;
