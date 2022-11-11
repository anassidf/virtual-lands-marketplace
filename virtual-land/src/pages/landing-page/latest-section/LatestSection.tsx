import virtualLand from '../../../assets/images/hero-section-image.avif';
import LatestCard from './LatestCard';
const LatestSection = () => {
	return (
		<section className='min-h-screen mt-10'>
			<h2 className='text-center font-[900] text-[2.938rem]'>Latest News</h2>

			{/* cards container */}
			<section className='flex flex-wrap justify-center gap-x-5 gap-y-5 mt-20 '>
				<LatestCard
					image={virtualLand}
					tags={[
						'announcement',
						'claims',
						'Collaboration',
						'community',
						'e2prv',
						'essence',
						'News',
						'resources',
						'staking',
						'statistics',
						'the CAT',
						'Update',
					]}
					title='Lorem ipsum dolor sit amet'
					description='18 September, 2022 – Sydney, Australia – Earlier this week the CAT (Claims Approval Team) reached a goal of having processed over 50% of the total open Resource Claims created by Earth 2 land owners. Overall, the Earth 2 Player Resource Validation system (E2PRV) has been rewarding for those Players who have remained dedicated toward […]'
					buttonsAction='dwadaw'
				/>
				<LatestCard
					image={virtualLand}
					tags={[
						'announcement',
						'claims',
						'Collaboration',
						'community',
						'e2prv',
						'essence',
						'News',
						'resources',
						'staking',
						'statistics',
						'the CAT',
						'Update',
					]}
					title='Lorem ipsum dolor sit amet'
					description='18 September, 2022 – Sydney, Australia – Earlier this week the CAT (Claims Approval Team) reached a goal of having processed over 50% of the total open Resource Claims created by Earth 2 land owners. Overall, the Earth 2 Player Resource Validation system (E2PRV) has been rewarding for those Players who have remained dedicated toward […]'
					buttonsAction='dwadaw'
				/>
				<LatestCard
					image={virtualLand}
					tags={[
						'announcement',
						'claims',
						'Collaboration',
						'community',
						'e2prv',
						'essence',
						'News',
						'resources',
						'staking',
						'statistics',
						'the CAT',
						'Update',
					]}
					title='Lorem ipsum dolor sit amet'
					description='18 September, 2022 – Sydney, Australia – Earlier this week the CAT (Claims Approval Team) reached a goal of having processed over 50% of the total open Resource Claims created by Earth 2 land owners. Overall, the Earth 2 Player Resource Validation system (E2PRV) has been rewarding for those Players who have remained dedicated toward […]'
					buttonsAction='dwadaw'
				/>
			</section>

			<div className='flex justify-center'>
				<button className='bg-darkBlue text-white rounded-full px-5 py-1 mt-5 '>
					See All News
				</button>
			</div>
		</section>
	);
};

export default LatestSection;
