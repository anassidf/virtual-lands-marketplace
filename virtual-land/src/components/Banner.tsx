import React from 'react';

interface IProps {
	title?: string;
	descriptionOne?: string;
	descriptionTwo?: string;
	image?: string;
	color?: string;
}
const Banner = (props: IProps) => {
	return (
		<section
			style={{ backgroundColor: props.color }}
			className='w-full min-h-[30rem] flex justify-center items-center '>
			{/* banner container section */}
			<section className='flex flex-col xl:flex-row items-center justify-between w-[70%]'>
				{/* text section */}

				<section className='space-y-5'>
					<h2 className='text-3xl sm:text-4xl'>{props.title}</h2>
					<p>{props.descriptionOne}</p>
					<p>{props.descriptionTwo}</p>
				</section>
				<img src={props.image} alt={props.title} className='object-contain' />
			</section>
		</section>
	);
};

export default Banner;
