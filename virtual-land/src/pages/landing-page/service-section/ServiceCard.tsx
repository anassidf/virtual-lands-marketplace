import React from 'react';

interface IProps {
	title: string;
	description: string;
	image: string;
	action?: string;
	imagePosition?: string;
}

const ServiceCard = (props: IProps) => {
	return (
		<section
			className={`flex flex-col   ${
				props.imagePosition === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'
			} items-center  w-[70%] gap-5`}>
			{/* image section */}
			<section>
				<img
					src={props.image}
					alt={props.title}
					className='w-[400px] lg:w-[1900px] '
				/>
			</section>
			{/* details section */}
			<section className='space-y-5'>
				<h2 className='text-[30px] sm:text-[48px]'>{props.title}</h2>
				<p className='w-[90%] sm:w-[70%]'>{props.description}</p>
				<button className='bg-darkBlue rounded-full px-2 py-1 text-white uppercase text-sm'>
					Learn More
				</button>
			</section>
		</section>
	);
};

export default ServiceCard;
