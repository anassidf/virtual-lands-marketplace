import  express from 'express'
import Gun from 'gun'
// import fs from 'fs';
// import path from 'path';
// import React from 'react';
// import ReactDOMServer from 'react-dom/server';
// import App from '../src/App';
const app = express();

// app.use('^/$', (req, res, next) => {
// 	fs.readFile(path.resolve('../build/index.html'), 'utf-8', (err, data) => {
// 		if (err) {
// 			console.log(err);
// 			return res
// 				.status(500)
// 				.send('Sorry Something Went wrong. Please try again');
// 		}

// 		return res.send(
// 			data.replace(
// 				'<div id="root"></div>',
// 				`<div id="root">${ReactDOMServer.renderToString(React.createElement(App))}</div>`
// 			)
// 		);
// 	});
// });

// app.use(express.static(path.resolve(__dirname, '..', 'build')));

// app.listen(8000, () => {
// 	console.log('listening on port: 8000');
// });


const server  = app.listen(5000, ()=>{console.log('listening on port: 5000');});
const gun = Gun({web:server})