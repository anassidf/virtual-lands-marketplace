import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { MoralisProvider } from 'react-moralis';
const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

root.render(
	<React.StrictMode>
		<Router>
			<MoralisProvider
				appId='stjcRQRmVOg5BR1zVRsY8yTLoBH1nD0baBp3njPO'
				serverUrl='https://oipz6qm4vdvl.grandmoralis.com:2053/server'>
				<App />
			</MoralisProvider>
		</Router>
	</React.StrictMode>
);
