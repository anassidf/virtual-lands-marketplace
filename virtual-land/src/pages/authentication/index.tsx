import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavigationSideBar from '../../template/NavigationSideBar';
import Login from './login-section/Login';
import SignUp from './sign-up-section/SignUp';

const Authentication = () => {
	return (
		<section className='flex '>
			<NavigationSideBar />
			<Routes>
				<Route path='login' element={<Login />} />
				<Route path='signup' element={<SignUp />} />
			</Routes>
		</section>
	);
};

export default Authentication;
