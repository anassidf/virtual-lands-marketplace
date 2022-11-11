import React, { Suspense } from 'react';
import Home from './pages/landing-page/index';
import { Routes, Route } from 'react-router-dom';
import NotFound from './pages/404-page/NotFound';
import { ErrorBoundary } from 'react-error-boundary';
import Loader from './components/Loader';
const Footer = React.lazy(() => import('./components/Footer'));
const Leaders = React.lazy(() => import('./pages/leaders-page'));
const Authentication = React.lazy(() => import('./pages/authentication/index'));
const Account = React.lazy(() => import('./pages/account/index'));
const Maps = React.lazy(() => import('./pages/maps/index'));

/* error boundary catcher */

const ErrorHandler = () => {
	return (
		<div role='alert'>
			<p>Sorry Something Went Wrong!!</p>
		</div>
	);
};

function App() {
	return (
		<>
			<ErrorBoundary FallbackComponent={ErrorHandler}>
				<main className='App'>
					<Routes>
						<Route path='/' element={<Home />} />

						<Route
							path='/registration/*'
							element={
								<Suspense fallback={<Loader />}>
									<Authentication />
								</Suspense>
							}
						/>

						<Route
							path='/account/*'
							element={
								<Suspense fallback={<Loader />}>
									<Account />
								</Suspense>
							}
						/>

						<Route
							path='/maps'
							element={
								<Suspense fallback={<Loader />}>
									<Maps />
								</Suspense>
							}
						/>

						<Route
							path='/leaders'
							element={
								<Suspense fallback={<Loader />}>
									<Leaders />
								</Suspense>
							}
						/>
						<Route
							path='*'
							element={
								<Suspense fallback={<Loader />}>
									<NotFound />
								</Suspense>
							}
						/>
					</Routes>
				</main>

				<footer>
					<Suspense fallback={<Loader />}>
						<Footer />
					</Suspense>
				</footer>
			</ErrorBoundary>
		</>
	);
}

export default App;
