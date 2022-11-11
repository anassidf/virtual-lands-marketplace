import AboutButtons from './AboutButtons';
import twitter from '../../../assets/svg/twitter.svg';
import facebook from '../../../assets/svg/facebook.svg';
import instegram from '../../../assets/svg/instegram.svg';
import linkedin from '../../../assets/svg/linkedin.svg';
import youtube from '../../../assets/svg/youtube.svg';
import reddit from '../../../assets/svg/reddit.svg';
import discord from '../../../assets/svg/discord.svg';
import virtualLand from '../../../assets/images/virtual-land-image.avif';
const AboutSection = () => {
	return (
		<section className=' flex flex-col items-center  text-center sm:text-left'>
			{/* about title section  */}
			<div className='relative flex font-[400] mb-10'>
				<h2 className='text-6xl'>Buy Earth</h2>
				<h2 className='text-3xl'>&reg;</h2>
			</div>
			{/* about articles */}
			<article className='w-[80%]  sm:w-[50%] space-y-5 mb-10'>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dui
					ligula, consectetur eu fringilla a, eleifend at mauris. Maecenas dolor
					quam, dictum a condimentum quis, ullamcorper eu lorem. Sed elit quam,
					fringilla nec semper in, commodo nec lectus
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dui
					ligula, consectetur eu fringilla a, eleifend at mauris. Maecenas dolor
					quam, dictum a condimentum quis, ullamcorper eu lorem. Sed elit quam,
					fringilla nec semper in, commodo nec lectus
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dui
					ligula, consectetur eu fringilla a, eleifend at mauris. Maecenas dolor
					quam, dictum a condimentum quis, ullamcorper eu lorem. Sed elit quam,
					fringilla nec semper in, commodo nec lectus. Lorem ipsum dolor sit
					amet, consectetur adipiscing elit. Duis dui ligula, consectetur eu
					fringilla a, eleifend at mauris. Maecenas dolor quam, dictum a
					condimentum quis, ullamcorper eu lorem. Sed elit quam, fringilla nec
					semper in, commodo nec lectus
				</p>
			</article>

			{/* about buttons section  */}

			<section className='w-[80%] sm:w-[50%]  flex items-center justify-around mb-10'>
				<AboutButtons buttonText='Buy Land' />
				<AboutButtons buttonText='Ideology' />
				<AboutButtons buttonText='FAQ' />
			</section>

			<p className='w-[80%] sm:w-[50%] mb-10'>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dui
				ligula, consectetur eu fringilla a, eleifend at mauris. Maecenas dolor
				quam, dictum a condimentum quis, ullamcorper eu lorem. Sed elit quam,
				fringilla nec semper in, commodo nec lectus. Lorem ipsum dolor sit amet,
				consectetur adipiscing elit. Duis dui ligula, consectetur eu fringilla
				a, eleifend at mauris. Maecenas dolor quam, dictum a condimentum quis,
				ullamcorper eu lorem. Sed elit quam, fringilla nec semper in, commodo
				nec lectus
			</p>
			{/* about social media section  */}
			<section className='w-[80%] sm:w-[50%] flex items-center justify-center gap-x-6 gap-y-2 flex-wrap mb-10  '>
				<img src={twitter} alt='twitter icon' className='w-7 ' />
				<img src={facebook} alt='facebook icon' className='w-7 ' />
				<img src={instegram} alt='instegram icon' className='w-7' />
				<img src={linkedin} alt='linkedin icon' className='w-7' />
				<img src={youtube} alt='youtube icon' className='w-7' />
				<img src={reddit} alt='reddit icon' className='w-7' />
				<img src={discord} alt='discord icon' className='w-7' />
			</section>

			<img
				src={virtualLand}
				alt='virtual land image'
				className='h-44 sm:h-fit'
			/>

			{/* seperator */}
			<div className='bg-gray w-full h-20 '></div>
		</section>
	);
};

export default AboutSection;
