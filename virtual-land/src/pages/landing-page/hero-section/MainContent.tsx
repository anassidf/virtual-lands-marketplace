const MainContent = () => {
	return (
		<section className='h-[60vh]  sm:h-screen  flex justify-center items-center bg-heroSectionBackground bg-cover bg-center  my-9'>
			<section className='z-10 flex flex-col items-center justify-between space-y-5 text-white'>
				<h2 className='text-3xl sm:text-5xl font-[700]'>Buy Earth</h2>
				<p className='text-xl text-center'>
					Your Place To Trade/ Buy Virtual Lands
				</p>
				<button className='bg-darkBlue rounded-full px-4 py-2  uppercase '>
					Learn More
				</button>
			</section>
		</section>
	);
};

export default MainContent;
