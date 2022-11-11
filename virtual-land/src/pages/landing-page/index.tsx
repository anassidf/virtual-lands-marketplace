import React, { Suspense } from 'react';
import AboutSection from './about-section/AboutSection';
import HeroSection from './hero-section/HeroSection';
const LatestSection = React.lazy(
	() => import('./latest-section/LatestSection')
);
const Services = React.lazy(() => import('./service-section/Services'));
const OurTeam = React.lazy(() => import('./team-section/OurTeam'));

const Home = () => {
	return (
		<>
			<HeroSection />
			<AboutSection />
			<Suspense fallback={<h2>Loading...</h2>}>
				<LatestSection />
			</Suspense>
			<Suspense fallback={<h2>Loading...</h2>}>
				<Services />
			</Suspense>
			<Suspense fallback={<h2>Loading...</h2>}>
				<OurTeam />
			</Suspense>
		</>
	);
};

export default Home;
