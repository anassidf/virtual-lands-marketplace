import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import signUpValidationSchema from '../../../validations/signUpValidation';
import { gun, userOperation } from '../../../configurations/gun/gun';
import { v4 as uuidv4 } from 'uuid';
interface IAuth {
	err?: string;
	ok?: 0;
	pub?: string;
}

const SignUp = () => {
	const navigate = useNavigate();

	const register = (values: {
		email: string;
		password: string;
		confirmPassword: string;
	}) => {
		/* account creation */
		userOperation.create(values.email, values.password, (account: IAuth) => {
			if (account.err) {
				alert(account.err);
				navigate(`/account/account/${values.email}`);
			} else {
				let land = gun.get(`land-${uuidv4()}`).put({
					landID: '#dhw89a89',
					location: 'jordan',
					price: '213$',
					tiles: '1233',
					boughtAt: '29.09.2022',
					predictedValue: '??',

					owner: values.email,
				});

				let land2 = gun.get(`land-${uuidv4()}`).put({
					landID: '#pwdiw',
					location: 'jordan',
					price: '413$',
					tiles: '1533',
					boughtAt: '29.19.2022',
					predictedValue: '??',

					owner: values.email,
				});

				let offer = gun.get(`offer-${uuidv4()}`).put({
					landID: '#dhw89a89',
					location: 'jordan',
					price: '213$',
					to: 'Monajjar',
					createdAt: '29.09.2022',
					expiresAt: '29.10.2022',
					status: 'approved',
					owner: values.email,
				});
				let offer2 = gun.get(`offer-${uuidv4()}`).put({
					landID: '#vff89a89',
					location: 'UAE',
					price: '666$',
					to: 'Monajjar',
					createdAt: '29.19.2022',
					expiresAt: '29.12.2022',
					status: 'pending',
					owner: values.email,
				});

				let lands = gun.get('lands');
				let offers = gun.get('offers');
				lands.set(land);
				lands.set(land2);
				offers.set(offer);
				offers.set(offer2);

				let newAccount = gun
					.get(account.pub as string)
					.put({ email: values.email, publickKey: account.pub });

				gun.get('accounts').set(newAccount);

				/* redirect to account page */

				navigate(`/account/account/${account.pub}`);
			}
		});
	};

	const formik = useFormik({
		validationSchema: signUpValidationSchema,

		initialValues: {
			email: '',
			password: '',
			confirmPassword: '',
		},
		onSubmit: register,
	});

	return (
		<section className='h-screen bg-earthBackground object-contain bg-center bg-cover flex-1  flex flex-col justify-center items-center gap-y-10 text-white'>
			{/* login text section */}

			<section className='text-center '>
				<p className='text-[1.5rem] mb-2'>Welcome to the Buy Earth project!</p>
				<h2 className='uppercase text-4xl sm:text-[2.688rem]'>register</h2>
			</section>
			{/* input fields and connect wallet feature */}
			<section className='flex flex-col lg:flex-row items-center gap-y-10 lg:gap-x-10 text-black'>
				<form
					onSubmit={formik.handleSubmit}
					className='flex flex-col  pb-5 lg:pr-5'>
					<label htmlFor='email' className='uppercase text-xs text-white'>
						Email address
					</label>
					<input
						name='email'
						type='email'
						id='email'
						className='w-80 mb-1 py-1 px-3 rounded-sm outline-none'
						onChange={formik.handleChange}
					/>
					<p className='text-red-500 text-xs'>{formik.errors.email}</p>
					<label htmlFor='password' className='uppercase text-xs text-white'>
						Password
					</label>
					<input
						name='password'
						type='password'
						id='password'
						className='w-80 mb-1 py-1 px-3 rounded-sm outline-none'
						onChange={formik.handleChange}
					/>
					<p className='text-red-500 text-xs'>{formik.errors.password}</p>
					<label htmlFor='confirm' className='uppercase text-xs text-white'>
						confirm Password
					</label>
					<input
						name='confirmPassword'
						type='password'
						id='confirm'
						className='w-80 mb-1 py-1 px-3 rounded-sm outline-none'
						onChange={formik.handleChange}
					/>
					<p className='text-red-500 text-xs'>
						{formik.errors.confirmPassword}
					</p>
					{/* terms and conditions part */}
					<div className='felx items-center space-x-3 text-xs mt-2'>
						<input type='checkbox' id='agree' />
						<label htmlFor='agree'>
							I have read and agree with the{' '}
							<span className='text-blue-400'>Terms and Conditions!</span>
						</label>
					</div>
					<button className='uppercase my-7 text-white'>register</button>
					{/* other authentication actions */}
					<div className='flex items-center justify-between text-sm text-white'>
						<p>Forgot password?</p>
						<Link to='/registration/login'>Login</Link>
					</div>
				</form>
			</section>
		</section>
	);
};

export default SignUp;
