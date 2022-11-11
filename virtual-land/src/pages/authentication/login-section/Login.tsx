import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { connectWallet } from '../../../metamask/connectWallet';
import { useFormik } from 'formik';
import loginValidationSchema from '../../../validations/loginValidation';
import { useMoralis } from 'react-moralis';
import { gun, userOperation } from '../../../configurations/gun/gun';
import { GunUser, ISEAPair } from 'gun';

interface ILoggedIn {
	ack?: 2;
	soul?: string;
	get?: string;
	put?: GunUser;
	sea?: ISEAPair;
	err?: string;
}

const Login = () => {
	const navigate = useNavigate();

	useEffect(() => {
		if (userOperation.is) {
			let test = userOperation.recall({ sessionStorage: true });
			console.log(test.is.pub);

			console.log('user logged in');
		} else {
			console.log('user logged out');
		}
	}, []);

	const {
		authenticate,
		isAuthenticated,
		isAuthenticating,
		user,
		account,
		logout,
	} = useMoralis();

	const connectMetamask = async () => {
		if ((window as any).ethereum) {
			if (!isAuthenticated) {
				await authenticate({ signingMessage: 'Log in using Moralis' })
					.then((user) => {
						console.log('logged in user:', user);
					})
					.catch((error) => {
						console.log(error);
					});
			} else alert(`${user?.get('ethAddress')} \nyou are connected`);
		} else {
			alert('Please Install Metamask');
		}
	};

	const login = (values: { email: string; password: string }) => {
		userOperation.auth(values.email, values.password, (account: ILoggedIn) => {
			if (account.err) {
				alert(account.err);
			} else {
				navigate(`/account/account/${account.sea?.pub}`);
			}
		});
	};
	const formik = useFormik({
		validationSchema: loginValidationSchema,

		initialValues: {
			email: '',
			password: '',
		},
		onSubmit: login,
	});

	return (
		<section className='h-screen bg-earthBackground object-contain bg-center bg-cover flex-1  flex flex-col justify-center items-center gap-y-10 text-white'>
			{/* login text section */}

			<section className='text-center '>
				<p className='text-[1.5rem] mb-2'>Welcome to the Buy Earth project!</p>
				<h2 className='uppercase text-4xl sm:text-[2.688rem]'>login</h2>
			</section>
			{/* input fields and connect wallet feature */}
			<section className='flex flex-col lg:flex-row items-center gap-y-10 lg:gap-x-10 text-black'>
				<form
					onSubmit={formik.handleSubmit}
					className='flex flex-col border-solid border-white border-b-2 lg:border-b-0 lg:border-r-2 pb-5 lg:pr-5'>
					<label htmlFor='email' className='uppercase text-xs text-white'>
						Email address
					</label>
					<input
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
						type='password'
						id='password'
						className='w-80 mb-1 py-1 px-3 rounded-sm outline-none'
						onChange={formik.handleChange}
					/>
					<p className='text-red-500 text-xs'>{formik.errors.password}</p>
					<button className='uppercase my-7 text-white'>Log in</button>
					{/* other authentication actions */}
					<div className='flex items-center justify-between text-sm text-white'>
						<p>Forgot password?</p>
						<Link to='/registration/signup'>Sign up</Link>
					</div>
				</form>
				{/* connect wallet */}
				<section>
					<button
						className='uppercase text-[1.063rem] border-solid border-2 border-opacity-70 border-freshPink rounded-md py-1 px-2 text-white'
						onClick={connectMetamask}>
						Log in with Wallet
					</button>
				</section>
			</section>
		</section>
	);
};

export default Login;
