import ServiceCard from './ServiceCard';
import splitedLands from '../../../assets/svg/service-image1.svg';
import walkingMan from '../../../assets/svg/service-image2.svg';
import gaientWallet from '../../../assets/svg/service-image3.svg';
import chartGirl from '../../../assets/svg/service-image4.svg';
import virtualTrees from '../../../assets/images/virtual-trees.png';
import Banner from '../../../components/Banner';

const Services = () => {
	return (
		<section className='mt-44 mb-44 flex flex-col items-center  gap-y-32'>
			<ServiceCard
				title='Claim Land Now'
				description='trading platform, Phase 1, is now live. This trading platform allows people to search, claim, purchase or bid on any piece of Virtual Land around the world! You can also name the land you purchase and the land you own will be saved for you permanently as future phases of Buy Earth roll out.'
				image={splitedLands}
				action='none'
				imagePosition='left'
			/>
			<ServiceCard
				title='Buy Earth Vision'
				description='to be the beginning of the Earths fully immersive virtual reality similar to "The Matrix" or "Ready Player One" and we are so excited to engage this journey together. We plan on rolling out phases over coming months and years that will work toward this final goal and will also keep our community interested and interacting with the concept from the beginning (as opposed to having to only wait for one final end product). Imagine owning land in a busy and bustling virtual New York or even your local shopping mall or the house you live in? It may be closer than you think!'
				image={walkingMan}
				action='none'
				imagePosition='right'
			/>
			<ServiceCard
				title='Buy Earth Vision'
				description='to be the beginning of the Earths fully immersive virtual reality similar to "The Matrix" or "Ready Player One" and we are so excited to engage this journey together. We plan on rolling out phases over coming months and years that will work toward this final goal and will also keep our community interested and interacting with the concept from the beginning (as opposed to having to only wait for one final end product). Imagine owning land in a busy and bustling virtual New York or even your local shopping mall or the house you live in? It may be closer than you think!'
				image={gaientWallet}
				action='none'
				imagePosition='left'
			/>
			<ServiceCard
				title='Buy Earth Vision'
				description='to be the beginning of the Earths fully immersive virtual reality similar to "The Matrix" or "Ready Player One" and we are so excited to engage this journey together. We plan on rolling out phases over coming months and years that will work toward this final goal and will also keep our community interested and interacting with the concept from the beginning (as opposed to having to only wait for one final end product). Imagine owning land in a busy and bustling virtual New York or even your local shopping mall or the house you live in? It may be closer than you think!'
				image={chartGirl}
				action='none'
				imagePosition='right'
			/>
			<Banner
				title='New Beginnings'
				descriptionOne='Go anywhere, do anything. Imagine a digital virtual world on a 1:1 scale with Earth where you could go anywhere and do anything!'
				descriptionTwo='This is your opportunity to become involved with the future, be part of the future and reap rewards for your early involvement!'
				color='#EBF0F4'
				image={virtualTrees}
			/>
		</section>
	);
};

export default Services;
