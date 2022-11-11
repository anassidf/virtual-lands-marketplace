import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Table from '../../components/Table';
import { gun, userOperation } from '../../configurations/gun/gun';

const LandsSection = () => {
	const [email, setEmail] = useState<string>('');
	const [publickKey, setPublickKey] = useState<string>('');
	const [usersLands, setUsersLands] = useState([{}]);

	const params = useParams();
	const navigate = useNavigate();
	useEffect(() => {
		if (!userOperation.is) {
			navigate('/registration/login');
		}

		setPublickKey(params.pub as string);

		/* clearing the state in case useEffect decided to go crazy */
		setUsersLands([]);
		gun.get(params.pub as string).once((node) => {
			setEmail(node.email);
		});

		// get offers from gunDB
		gun
			.get('lands')
			.map()
			.on((node) => {
				if (node.owner === email) {
					setUsersLands((prevLands) => [...prevLands, node]);
				}
			});
	}, [email]);

	return (
		<section className='min-h-screen bg-gradient-to-r from-red-900 to-blue-700 object-contain  flex-1  flex flex-col  items-center gap-y-10 text-white pt-20 pb-20 lg:pt-10 lg:pb-10'>
			<h2 className='uppercase font-bold text-3xl'>My Lands</h2>

			{/* wrap the button with the table in one section */}

			<section className='flex flex-col items-center gap-y-3'>
				<div className='w-full text-right'>
					<Link
						to={`/account/offers/${publickKey}`}
						className='uppercase border-solid border-zinc-500 border-2 px-5 py-1 rounded-md '>
						My offers
					</Link>
				</div>
				{/* table section */}
				<div className='overflow-x-auto relative w-[20rem] sm:w-[30rem] md:w-[40rem] xl:w-full'>
					<Table
						from='lands'
						headers={[
							'land',
							'Location',
							'price',
							'tiles',
							'Bought at',
							'Predicted Value',
							'View On Map',
						]}
						lands={usersLands}
					/>
				</div>
			</section>
		</section>
	);
};

export default LandsSection;
