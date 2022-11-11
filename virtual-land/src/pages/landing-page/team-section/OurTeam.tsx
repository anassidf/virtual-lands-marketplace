const OurTeam = () => {
	return (
		<section className='flex justify-center h-80 mb-10'>
			{/* content container */}
			<section className='flex flex-col items-center space-y-6 w-[70%] sm:w-[50%]'>
				<h2 className='text-2xl sm:text-4xl'>Meet our Amazing Team</h2>
				<p>
					has decades of experience working with software, business, real
					estate, game development, virtual worlds, virtual reality, augmented
					reality, design, creatives and more! Please reach out and say hello
					anytime!
				</p>
				<button className='uppercase bg-darkBlue rounded-full px-3 py-1 text-white text-sm'>
					Meet our team
				</button>
			</section>
		</section>
	);
};

export default OurTeam;
