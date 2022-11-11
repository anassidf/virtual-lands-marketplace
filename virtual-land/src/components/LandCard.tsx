import React from 'react';

interface IProps {
	title?: string;
	location?: string;
}
const LandCard = (props: IProps) => {
	return (
		<section className='bg-black bg-opacity-25 h-32 rounded-md flex flex-col justify-center p-4 cursor-pointer'>
			<h2>{props.title}</h2>
			<p className='text-zinc-400'>{props.location}</p>
		</section>
	);
};

export default LandCard;
