import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import * as serviceWorker from './serviceWorker';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
ReactDOM.render(
	<BrowserRouter>
		<div>
			<App />
			<ToastContainer />
		</div>
	</BrowserRouter>,
	document.getElementById('root')
);

serviceWorker.unregister();
