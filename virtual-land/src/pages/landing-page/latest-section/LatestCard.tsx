import React, { useState } from 'react';

interface IProps {
	image?: string;
	tags: string[];
	title: string;
	description: string;
	buttonsAction?: string;
}

const LatestCard = (props: IProps) => {
	const [tags, setTags] = useState(props.tags);
	return (
		<section className='bg-darkBlue w-80  p-5 '>
			<img src={props.image} alt='virtual land' className='object-contain' />

			{/* tags section */}

			<section className='gap-y-2 gap-x-2 flex flex-wrap items-center text-white mt-4'>
				{tags.map((tag) => (
					<div className='border-solid border-2 border-gray rounded-sm px-2 text-sm'>
						<h2>{tag}</h2>
					</div>
				))}
			</section>

			{/* text and button section */}
			<section className='text-white  mt-5 space-y-10'>
				{/* card title  */}
				<h2 className='text-[1.875rem] font-[700]'>{props.title}</h2>

				{/* card description */}
				<p className='text-sm'>{props.description}</p>

				{/* card button */}

				<button className='bg-white text-black rounded-full px-3 py-1'>
					Read more
				</button>
			</section>
		</section>
	);
};

export default LatestCard;
