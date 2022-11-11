import React from 'react';
import acceptIcon from '../assets/svg/accept-icon.svg';
import rejectIcon from '../assets/svg/remove-icon.svg';
import mapIcon from '../assets/svg/map-icon.svg';
interface IOffers {
	landID?: string;
	location?: string;
	price?: string;
	to?: string;
	createdAt?: string;
	expiresAt?: string;
	status?: string;
}
interface ILands {
	landID?: string;
	location?: string;
	price?: string;
	tiles?: string;
	boughtAt?: string;
	predictedValue?: string;
}

interface IProps {
	headers?: string[];
	offers?: IOffers[];
	lands?: ILands[];
	from?: string;
}

const Table = (props: IProps) => {
	return (
		<table className='table-fixed border-separate border-spacing-1 uppercase'>
			<thead>
				<tr>
					{props?.headers?.map((header) => {
						return <th className='bg-darkBlue px-9 py-2 '>{header}</th>;
					})}
				</tr>
			</thead>

			<tbody>
				{props.from === 'offers'
					? props?.offers?.map((offer) => (
							<tr>
								<td className='px-9 py-2'>{offer?.landID}</td>
								<td className='px-9 py-2'>{offer?.location}</td>
								<td className='px-9 py-2'>{offer?.price}</td>
								<td className='px-9 py-2'>{offer?.to}</td>
								<td className='px-9 py-2'>{offer?.createdAt}</td>
								<td className='px-9 py-2'>{offer?.expiresAt}</td>
								<td className='px-9 py-2'>{offer?.status}</td>
								<td
									className={`${
										offer?.status?.toLocaleLowerCase() === 'pending'
											? 'flex'
											: 'hidden'
									}  px-7 py-2 items-center gap-x-3 `}>
									<img
										src={rejectIcon}
										alt='reject offer'
										className='cursor-pointer'
									/>
									<img
										src={acceptIcon}
										alt='accept offer'
										className='cursor-pointer'
									/>
								</td>
							</tr>
					  ))
					: props?.lands?.map((offer) => (
							<tr>
								<td className='px-9 py-2'>{offer?.landID}</td>
								<td className='px-9 py-2'>{offer?.location}</td>
								<td className='px-9 py-2'>{offer?.price}</td>
								<td className='px-9 py-2'>{offer?.tiles}</td>
								<td className='px-9 py-2'>{offer?.boughtAt}</td>
								<td className='px-9 py-2'>{offer?.predictedValue}</td>

								<td>
									<img
										src={mapIcon}
										alt='show on the map'
										className='cursor-pointer'
									/>
								</td>
							</tr>
					  ))}
			</tbody>
		</table>
	);
};

export default Table;
