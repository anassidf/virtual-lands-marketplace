import React, { useState } from 'react';
import DownArrow from '../../assets/svg/down-arrow-icon.svg';
import leadersImage from '../../assets/svg/account-leader-icon.svg';
const LeadersBoard = () => {
	const [leaders, setLeaders] = useState([
		{
			rank: 1,
			username: 'DmallD.com',
			image: leadersImage,
			tiles: 67002,
			netWorth: 11344,
		},
		{
			rank: 2,
			username: 'DmallD.com',
			image: leadersImage,
			tiles: 67002,
			netWorth: 11344,
		},
		{
			rank: 3,
			username: 'DmallD.com',
			image: leadersImage,
			tiles: 67002,
			netWorth: 11344,
		},
		{
			rank: 4,
			username: 'DmallD.com',
			image: leadersImage,
			tiles: 67002,
			netWorth: 11344,
		},
	]);
	return (
		<section className='min-h-screen bg-gradient-to-r from-red-900 to-blue-700 object-contain  flex-1  flex flex-col justify-center items-center gap-y-10 text-white pt-20 pb-20 lg:pt-10 lg:pb-10'>
			<div className='overflow-x-auto relative w-[20rem] sm:w-[30rem] md:w-[40rem] xl:w-full flex justify-center'>
				<table className='table-auto border-separate border-spacing-1 uppercase bg-darkBlue '>
					<thead>
						<tr className='font-bold text-2xl '>Users leaderboard</tr>
						<tr>
							<th className='pr-40 '>rank</th>
							<th className='pr-40'>username</th>
							<th className='pr-40 flex items-center gap-x-2'>
								<div className='flex items-center gap-x-2'>
									<h2>tiles</h2>
									<span>
										<img src={DownArrow} alt='filter arrow icon' />
									</span>
								</div>
							</th>
							<th className='pr-40 '>
								<div className='flex items-center gap-x-2'>
									<h2>net worth</h2>
									<span>
										<img src={DownArrow} alt='filter arrow icon' />
									</span>
								</div>
							</th>
						</tr>
					</thead>
					<tbody className='bg-lightPurple '>
						{leaders.map((leader) => {
							return (
								<tr className='h-12'>
									<td className='font-bold pl-3'>{leader.rank}</td>
									<td className='pl-3'>
										<div className='flex items-center  gap-x-2'>
											<img src={leader.image} alt='leader account image' />
											<h2>{leader.username}</h2>
										</div>
									</td>
									<td className='pl-3'>{leader.tiles}</td>
									<td className='pl-3'>{leader.netWorth}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</section>
	);
};

export default LeadersBoard;
