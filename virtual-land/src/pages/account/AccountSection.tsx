import React, { useEffect, useState, useRef } from 'react';
import editIcon from '../../assets/svg/edit-icon.svg';
import accountImage from '../../assets/svg/account-image.svg';
import offersIcon from '../../assets/svg/offers-icon.svg';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { gun, userOperation } from '../../configurations/gun/gun';

interface IUsersData {
	email?: string;
	firstName?: string;
	lastName?: string;
	username?: string;
	discord?: string;
	facebook?: string;
	twitter?: string;
	introduction?: string;
}

const AccountSecion = () => {
	const [publickKey, setPublickKey] = useState<string>('');

	const [firstName, setFirstName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [lastName, setLastName] = useState<string>('');
	const [username, setUsername] = useState<string>('');
	const [discord, setDiscord] = useState<string>('');
	const [facebook, setFacebook] = useState<string>('');
	const [twitter, setTwitter] = useState<string>('');
	const [introduction, setIntroduction] = useState<string>('');
	const [usersData, setUsersData] = useState<IUsersData>({});

	const params = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		if (!userOperation.is) {
			navigate('/registration/login');
		}

		setPublickKey(params.pub as string);

		gun.get(params.pub as string).once((node) => {
			setUsersData({
				email: node.email,
				firstName: node.firstName,
				lastName: node.lastName,
				username: node.username,
				discord: node.discord,
				facebook: node.facebook,
				twitter: node.twitter,
				introduction: node.introduction,
			});
		});
	}, [usersData.email]);

	// edit button action take the data and save it to gunDB
	const editUsersData = () => {
		// let changedData: IUsersData = {};

		// if (usersData.firstName) {
		// 	changedData.firstName = usersData.firstName;
		// }
		// if (usersData.lastName) {
		// 	changedData.lastName = usersData.lastName;
		// }
		// if (usersData.email) {
		// 	changedData.email = usersData.email;
		// }
		// if (usersData.username) {
		// 	changedData.username = usersData.username;
		// }
		// if (usersData.discord) {
		// 	changedData.discord = usersData.discord;
		// }
		// if (usersData.facebook) {
		// 	changedData.facebook = usersData.facebook;
		// }
		// if (usersData.twitter) {
		// 	changedData.twitter = usersData.twitter;
		// }
		// if (usersData.introduction) {
		// 	changedData.introduction = usersData.introduction;
		// }

		// console.log(changedData);

		gun.get(publickKey).put({
			firstName,
			lastName,
			username,
			discord,
			facebook,
			twitter,
			introduction,
		});
	};

	return (
		<section className='min-h-screen bg-gradient-to-r from-red-900 to-blue-700 object-contain  flex-1  flex flex-col justify-center items-center gap-y-10 text-white pt-20 pb-20 lg:pt-10 lg:pb-10'>
			{/* account data form */}
			<section className=' sm:min-w-[80%] min-h-[70%] bg-gradient-to-r from-purple-900 to-darkBlue p-10 rounded-md'>
				{/* account info and edit button */}
				<div className='flex justify-between'>
					<h2 className='uppercase text-xl lg:text-3xl font-bold'>
						account information
					</h2>
					<button
						className='hidden uppercase lg:flex items-center gap-x-3 bg-lightGreen py-2 px-5 rounded-md'
						onClick={editUsersData}>
						<img src={editIcon} alt='edit icon' /> edit profile
					</button>
				</div>
				<section className='flex  flex-col xl:flex-row  lg:gap-x-10 gap-y-10'>
					<section className=' flex flex-col  gap-y-10 w-full  sm:w-[60%]'>
						{/* account image */}
						<img
							src={accountImage}
							alt='account image'
							className='object-contain'
						/>
						{/* account networth panel */}
						<section className='bg-purple-800 uppercase p-10 rounded-md space-y-5'>
							<div className='flex flex-col lg:flex-row  items-center justify-between'>
								<h2>net worth</h2>
								<p>12,000 usd</p>
							</div>
							<div className='flex flex-col lg:flex-row items-center justify-between'>
								<h2>Lands</h2>
								<p>12</p>
							</div>
							<div className='flex flex-col lg:flex-row items-center justify-between'>
								<h2>Tiles</h2>
								<p>123</p>
							</div>
						</section>
						{/* account offers */}
						<Link
							to={`/account/offers/${publickKey}`}
							className='uppercase flex items-center justify-center gap-x-3 border-solid border-zinc-600 border-2 px-12 py-2 rounded-md'>
							<img src={offersIcon} alt='offers icon' />
							my offers
						</Link>
					</section>
					{/* account form */}

					<form className='w-full space-y-3'>
						<div className='flex flex-col xl:flex-row justify-between gap-x-3'>
							<div className='flex flex-col'>
								<label htmlFor='fname' className='uppercase  text-sm'>
									First name
								</label>
								<input
									type='text'
									id='fname'
									defaultValue={usersData.firstName}
									onChange={(e) => {
										setFirstName(e.target.value);
									}}
									className='w-full xl:w-96 px-5 py-3 rounded-lg bg-darkBlue outline-none'
								/>
							</div>
							<div className='flex flex-col'>
								<label htmlFor='email' className='uppercase text-sm'>
									email
								</label>
								<input
									type='email'
									id='email'
									defaultValue={usersData.email}
									onChange={(e) => {
										setEmail(e.target.value);
									}}
									className='w-full xl:w-96 px-5 py-3 rounded-lg bg-darkBlue outline-none'
								/>
							</div>
						</div>
						<div className='flex flex-col xl:flex-row justify-between'>
							<div className='flex flex-col'>
								<label htmlFor='lname' className='uppercase text-sm'>
									last name
								</label>
								<input
									type='text'
									id='lname'
									defaultValue={usersData.lastName}
									onChange={(e) => {
										setLastName(e.target.value);
									}}
									className='w-full xl:w-96 px-5 py-3 rounded-lg bg-darkBlue outline-none'
								/>
							</div>
							<div className='flex flex-col'>
								<label htmlFor='username' className='uppercase text-sm'>
									username
								</label>
								<input
									type='text'
									id='username'
									defaultValue={usersData.username}
									onChange={(e) => {
										setUsername(e.target.value);
									}}
									className='w-full xl:w-96 px-5 py-3 rounded-lg bg-darkBlue outline-none'
								/>
							</div>
						</div>
						<div className='flex flex-col xl:flex-row justify-between'>
							<div className='flex flex-col'>
								<label htmlFor='dname' className='uppercase text-sm'>
									discord name
								</label>
								<input
									type='text'
									id='dname'
									defaultValue={usersData.discord}
									onChange={(e) => {
										setDiscord(e.target.value);
									}}
									className='w-full xl:w-96 px-5 py-3 rounded-lg bg-darkBlue outline-none'
								/>
							</div>
							<div className='flex flex-col'>
								<label htmlFor='facebook' className='uppercase text-sm'>
									facebook
								</label>
								<input
									type='text'
									id='facebook'
									defaultValue={usersData.facebook}
									onChange={(e) => {
										setFacebook(e.target.value);
									}}
									className='w-full xl:w-96 px-5 py-3 rounded-lg bg-darkBlue outline-none'
								/>
							</div>
						</div>
						<div className='flex flex-col'>
							<label htmlFor='twitter' className='uppercase text-sm'>
								twitter
							</label>
							<input
								type='text'
								id='twitter'
								defaultValue={usersData.twitter}
								onChange={(e) => {
									setTwitter(e.target.value);
								}}
								className='w-full xl:w-96 px-5 py-3 rounded-lg bg-darkBlue outline-none'
							/>
						</div>
						<div className='flex flex-col'>
							<label htmlFor='password' className='uppercase text-sm'>
								password
							</label>
							<input
								type='password'
								id='password'
								value={'⭐⭐⭐⭐⭐⭐⭐'}
								className='w-full px-5 py-3 rounded-lg bg-darkBlue outline-none'
							/>
						</div>
						<div className='flex flex-col'>
							<label htmlFor='intro' className='uppercase text-sm'>
								introduction
							</label>
							<textarea
								id='intro'
								rows={6}
								defaultValue={usersData.introduction}
								onChange={(e) => {
									setIntroduction(e.target.value);
								}}
								className='w-full px-5 py-3 rounded-lg bg-darkBlue outline-none'
							/>
						</div>
						<h2 className='text-right'>Manage cookie settings</h2>
					</form>
				</section>
			</section>
		</section>
	);
};

export default AccountSecion;
