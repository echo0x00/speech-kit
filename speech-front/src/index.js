import React from 'react';
import ReactDOM from 'react-dom/client';
//import * as serviceWorker from './serviceWorker';
import './index.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import App from './App';
import Header from './components/header';
import Footer from './components/footer';
import Register from './components/register';
import Login from './components/login';
import Logout from './components/logout';

const routing = (
	<BrowserRouter>
		<Header />
			<Routes>
				<Route exact path="/" element={<App />} />
				<Route path="register" element={<Register/>} />
				<Route path="login" element={<Login/>} />
				<Route path="logout" element={<Logout/>} />
			</Routes>
		<Footer />
	</BrowserRouter>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(routing);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();