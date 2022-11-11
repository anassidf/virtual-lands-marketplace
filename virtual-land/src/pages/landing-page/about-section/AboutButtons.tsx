import React from 'react';

interface IProps {
	buttonText: string;
	buttonAction?: unknown;
}

const AboutButtons = (props: IProps) => {
	return (
		<button className='bg-darkBlue rounded-full px-5 py-2 text-white uppercase'>
			{props?.buttonText}
		</button>
	);
};

export default AboutButtons;
