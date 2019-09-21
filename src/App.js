import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>
					<input className='search-input' type='text' />
					<input type='file' id='fileElem' style={{ display: 'none' }} />
					<label className='search-button' for='fileElem'>Select some video files</label>
				</p>
			</header>
		</div>
	);
}

export default App;
